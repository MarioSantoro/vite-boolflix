<template>
    <h1>Films</h1>
    <ul>
        <li class="" v-for="(film, index) in  store.listFilms ">
            <div class="image-background">
                <img :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
            </div>
            <div class="title d-flex">
                <h4>Titolo:</h4>
                <p>{{ film.title }}</p>
            </div>
            <div class="title-original d-flex">
                <h4>Titolo Originale:</h4>
                <p>{{ film.original_title }}</p>
            </div>
            <div class="lang d-flex">
                <h4>Lingua Originale:</h4>
                <div v-if="listLanguageImage.includes(film.original_language + '.jpg')">
                    <img :src="getImagePath(film.original_language + '.jpg')" alt="">
                </div>
                <div v-else>
                    {{ film.original_language }}
                </div>
            </div>
            <div class="vote d-flex">
                <h4>Voto:</h4>
                <div class="star" v-for="star in 5">
                    <div v-if="star <= starsVote[index]">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div v-else>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import { store } from "../store.js"
export default {
    data() {
        return {
            store,
            listLanguageImage: [
                "it.jpg",
                "en.jpg",
                "ja.jpg",
                "fr.jpg"
            ],
            starsVote: [],
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },
        convertVote() {
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