<template >
    <h1>Top Rated Series</h1>
    <ul class="d-flex scroll-images-series">
        <i @click="leftScroll" class="fa-solid fa-angle-left fa-xl left text-white"></i>
        <li v-for="(TopRated, index) in  store.listSeriesTopRated ">
            <SingleCard :list="TopRated" :index="index" :starList="starsVote" :listActor="store.listActorFilm"
                :listGen="store.listGenFilm" @mouseenter.prevent="getActorAndGen(TopRated.id)" />
        </li>
        <i @click="rightScroll" class="fa-solid fa-angle-right fa-xl right text-white"></i>
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
            axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=65244d6f06d68cdb45fac9568796af91&language=it-I`)
                .then((response) => {
                    store.listSeriesTopRated = response.data.results;
                    console.log(store.listSeriesTopRated)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        convertVote() {
            this.starsVote = [];
            store.listSeriesTopRated.forEach(element => {
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

        leftScroll() {
            const left = document.querySelector(".scroll-images-series");
            left.scrollBy(-1000, 0);
        },

        rightScroll() {
            const right = document.querySelector(".scroll-images-series");
            right.scrollBy(1000, 0);
        }
    },
    mounted() {
        this.getFilmTopRated();
    },

    beforeUpdate() {
        this.convertVote();
    }
}
</script>
<style lang="scss" scoped>
.left {
    position: absolute;
    left: 10px;
    bottom: -50px;
    transform: translateY(-50%);
    z-index: 3;
    cursor: pointer;
    transition: all .5s ease;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
        0px -4px 10px rgba(255, 255, 255, 0.3);
}

.right {
    position: absolute;
    right: 10px;
    bottom: -50px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all .5s ease;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
        0px -4px 10px rgba(255, 255, 255, 0.3);
}

.left:hover,
.right:hover {
    transform: scale(1.5);
}
</style>