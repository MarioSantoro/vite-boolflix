<template >
    <h1>Top Rated</h1>
    <ul class="d-flex">
        <li v-for="(TopRated, index) in  store.listFilmsTopRated ">
            <SingleCard :list="TopRated" :index="index" :starList="starsVote" :listActor="store.listActorFilm"
                :listGen="store.listGenFilm" @mouseenter.prevent="getActorAndGen(TopRated.id)" />
        </li>
    </ul>
</template>
<script>
import axios from 'axios';
import { store } from "../store.js"
import SingleCard from "./SingleCard.vue";
export default {
    data() {
        return {
            store,
            starsVote: [],
        }
    },

    components: {
        SingleCard,
    },
    methods: {
        getFilmTopRated() {
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=65244d6f06d68cdb45fac9568796af91&language=it-I`)
                .then((response) => {
                    store.listFilmsTopRated = response.data.results;
                    console.log(store.listFilmsTopRated)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        convertVote() {
            this.starsVote = [];
            store.listFilmsTopRated.forEach(element => {
                this.starsVote.push(Math.round((element.vote_average / 10) * 5));
            });
        },
        getActorAndGen(item) {
            axios.get(`https://api.themoviedb.org/3/movie/${item}/credits?api_key=65244d6f06d68cdb45fac9568796af91&language=it-IT`)
                .then((response) => {
                    store.listActorFilm = response.data.cast.slice(0, 5);

                })
                .catch(function (error) {
                    console.log(error);
                });


            axios.get(`https://api.themoviedb.org/3/movie/${item}?api_key=65244d6f06d68cdb45fac9568796af91&language=it-IT`)
                .then((response) => {
                    store.listGenFilm = response.data.genres;
                    console.log(store.listGenFilm)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getFilmTopRated();
    },

    beforeUpdate() {
        this.convertVote();
    }
}
</script>
<style lang="scss" scoped></style>