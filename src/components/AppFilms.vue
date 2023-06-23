<template>
    <h1>Films</h1>
    <ul class="d-flex scroll-images-film">
        <i @click="leftScroll" class="fa-solid fa-angle-left fa-xl left text-white"></i>
        <li v-for="(film, index) in  store.listFilms ">
            <SingleCard :list="film" :index="index" :starList="starsVote" :listActor="store.listActorFilm"
                :listGen="store.listGenFilm" @mouseenter.prevent="getActorAndGen(film.id)" />
        </li>
        <i @click="rightScroll" class="fa-solid fa-angle-right fa-xl right text-white"></i>
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
                    console.log(store.listGenFilm)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        leftScroll() {
            const left = document.querySelector(".scroll-images-film");
            left.scrollBy(-1000, 0);
        },

        rightScroll() {
            const right = document.querySelector(".scroll-images-film");
            right.scrollBy(1000, 0);
        }
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
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    cursor: pointer;
}

.right {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
</style>