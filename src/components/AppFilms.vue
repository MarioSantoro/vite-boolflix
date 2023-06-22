<template>
    <h1>Films</h1>
    <ul class="d-flex">
        <li v-for="(film, index) in  store.listFilms ">
            <SingleCard :list="film" :index="index" :starList="starsVote" />
        </li>
    </ul>
</template>
<script>
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
            console.log(this.starsVote)
        }
    },
    beforeUpdate() {
        this.convertVote();
    }
}
</script>
<style lang="scss" scoped></style>