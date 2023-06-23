<template>
    <h1>Series</h1>
    <ul class="d-flex  scroll-images-series align-items-center justify-content-between">
        <i @click="leftScroll" class="fa-solid fa-angle-left fa-xl left text-white"></i>
        <li v-for="(serie, index) in  store.listSeries ">
            <SingleCard :list="serie" :index="index" :starList="starsVote" :listActor="store.listActorSeries"
                :listGen="store.listGenSeries" @mouseenter="getActorAndGen(serie.id)" />
        </li>
        <i @click="rightScroll" class="fa-solid fa-angle-right fa-xl right text-white"></i>
    </ul>
</template>
<script>
import { store } from "../store.js"
import axios from "axios";
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
            this.store.listSeries.forEach(element => {
                this.starsVote.push(Math.round((element.vote_average / 10) * 5));
            });
        },

        getActorAndGen(item) {
            axios.get(`https://api.themoviedb.org/3/tv/${item}/credits?api_key=65244d6f06d68cdb45fac9568796af91&language=it-IT`)
                .then((response) => {
                    store.listActorSeries = response.data.cast.slice(0, 5);
                })
                .catch(function (error) {
                    console.log(error);
                });


            axios.get(`https://api.themoviedb.org/3/tv/${item}?api_key=65244d6f06d68cdb45fac9568796af91&language=it-IT`)
                .then((response) => {
                    store.listGenSeries = response.data.genres;
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

    beforeUpdate() {
        this.convertVote();
    },
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
</style>