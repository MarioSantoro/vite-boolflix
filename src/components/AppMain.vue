<template>
    <main>
        <ul>
            <li class="" v-for="(film, index) in  store.listFilms ">
                <div class="title">
                    <h4>Titolo:</h4>
                    <p>{{ film.title }}</p>
                </div>
                <div class="title-original">
                    <h4>Titolo Originale:</h4>
                    <p>{{ film.original_title }}</p>
                </div>
                <div class="lang">
                    <h4>Lingua Originale:</h4>
                    <div v-if="listLanguageImage.includes(film.original_language + '.jpg')">
                        <img :src="getImagePath(film.original_language + '.jpg')" alt="">
                    </div>
                    <div v-else>
                        {{ film.original_language }}
                    </div>
                </div>
                <div class="vote">
                    <h4>Voto:</h4>
                    <p>{{ film.vote_average }}</p>
                </div>
            </li>
        </ul>
    </main>
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
        }
    },

    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}   
</script>
<style lang="scss">
li {
    border: 1px solid black;
    width: 35%;
}

div.lang img {
    width: 30px;
    height: 30px;
    object-fit: contain;
}
</style>