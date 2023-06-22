<template>
    <h1>Series</h1>
    <ul class="d-flex">
        <li v-for="(serie, index) in  store.listSeries ">
            <SingleCard :list="serie" :index="index" :starList="starsVote" />
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
            this.store.listSeries.forEach(element => {
                this.starsVote.push(Math.round((element.vote_average / 10) * 5));
            });
            console.log(this.starsVote)
        },
    },

    beforeUpdate() {
        this.convertVote();
    },
}
</script>
<style lang="scss" scoped></style>