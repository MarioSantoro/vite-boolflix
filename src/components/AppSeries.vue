<template>
    <h1>Series</h1>
    <ul class="d-flex">
        <li v-for="(serie, index) in  store.listSeries ">
            <SingleCard :list="serie" :index="index" :starList="starsVote" :listActor="store.listActorSeries"
                :listGen="store.listGenSeries" @mouseenter="getActor(serie.id)" />
        </li>
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

        getActor(item) {
            axios.get(`https://api.themoviedb.org/3/tv/${item}/credits?api_key=65244d6f06d68cdb45fac9568796af91&language=it-IT`)
                .then((response) => {
                    store.listActorSeries = response.data.cast.slice(0, 5);
                    console.log(store.listActorSeries)
                })
                .catch(function (error) {
                    console.log(error);
                });


            axios.get(`https://api.themoviedb.org/3/tv/${item}?api_key=65244d6f06d68cdb45fac9568796af91&language=it-IT`)
                .then((response) => {
                    store.listGenSeries = response.data.genres;
                    console.log(store.listGenSeries)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    },

    beforeUpdate() {
        this.convertVote();
    },
}
</script>
<style lang="scss" scoped></style>