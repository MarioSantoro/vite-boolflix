<template>
    <h1>Films</h1>
    <ul class="d-flex">
        <li v-for="(film, index) in  store.listFilms ">
            <SingleCard :list="film" :index="index" :starList="starsVote" :listActor="store.listActorFilm"
                :listGen="store.listGenFilm" @mouseenter.prevent="getActorAndGen(film.id)" />
        </li>
    </ul>
</template>
<script>
import axios from "axios";
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
        convertVote() {
            this.starsVote = [];
            store.listFilms.forEach(element => {
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

                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    beforeUpdate() {
        this.convertVote();
    }
}
</script>
<style lang="scss" scoped></style>