<template>
    <header>
        <div class="searchbar d-flex">
            <input type="search" v-model="this.searchedFilm">
            <button @click="getFilms">Cerca</button>
        </div>
    </header>
</template>
<script>
import axios from 'axios';
import { store } from "../store.js"
export default {
    data() {
        return {
            searchedFilm: "",
        }
    },
    methods: {
        getFilms() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=65244d6f06d68cdb45fac9568796af91&query=${this.searchedFilm}`)
                .then((response) => {
                    store.listFilms = response.data.results;
                    console.log(store.listFilms)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
}
</script>
<style lang="scss"></style>