<template>
    <header>
        <nav class="d-flex justify-content-between align-items-center">
            <div class="logo d-flex  align-items-center">
                <img src="../assets/netflix-logo.webp" alt="">
                <div class="nav-bar-links text-white">
                    <ul class="d-flex ">
                        <li class="ms-5">Home</li>
                        <li class="ms-5">Serie Tv</li>
                        <li class="ms-5">Film</li>
                        <li class="ms-5">Originali</li>
                        <li class="ms-5">Aggiounti di recente</li>
                        <li class="ms-5">La mia lista</li>
                    </ul>
                </div>
            </div>
            <div class="searchbar d-flex align-items-center">
                <input type="search" v-model="this.searchedFilm">
                <i @click="getFilmsAndSeries" class="fa-solid fa-magnifying-glass text-white ms-3"></i>
            </div>
            <div class="image-profile d-flex align-items-center">
                <i class="fa-solid fa-bell fa-xl me-5 text-white"></i>
                <img src="../assets/profile.png" alt="">
                <i class="fa-solid fa-caret-down ms-3 text-white"></i>
            </div>
        </nav>
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
        getFilmsAndSeries() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=65244d6f06d68cdb45fac9568796af91&language=it-IT&query=${this.searchedFilm}`)
                .then((response) => {
                    store.listFilms = response.data.results;
                    console.log(store.listFilms)
                })
                .catch(function (error) {
                    console.log(error);
                });


            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=65244d6f06d68cdb45fac9568796af91&language=it_IT&query=${this.searchedFilm}`)
                .then((response) => {
                    store.listSeries = response.data.results;
                    console.log(store.listSeries)
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    }
}
</script>
<style lang="scss">
nav {
    padding: 1rem;
    background-color: #000;

    div.searchbar {
        input {
            border-radius: 1rem;
            border: none;
            outline: none;
            padding: .33rem .55rem;
        }

        input:focus {
            border: 2px solid #ccc;
        }

        i {
            cursor: pointer;
        }
    }

    div.logo img {
        width: 110px;
        height: 70px;
    }

    div.image-profile {

        img {
            width: 40px;
            height: 40px;
        }
    }
}
</style>