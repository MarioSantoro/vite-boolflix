<template>
    <h1>Series</h1>
    <ul>
        <li class="" v-for="(serie, index) in  store.listSeries ">
            <div class="image-background">
                <img :src="`https://image.tmdb.org/t/p/w300/${serie.poster_path}`" alt="">
            </div>
            <div class="title d-flex">
                <h4>Titolo:</h4>
                <p>{{ serie.name }}</p>
            </div>
            <div class="title-original d-flex">
                <h4>Titolo Originale:</h4>
                <p>{{ serie.original_name }}</p>
            </div>
            <div class="lang d-flex">
                <h4>Lingua Originale:</h4>
                <div v-if="listLanguageImage.includes(serie.original_language + '.jpg')">
                    <img :src="getImagePath(serie.original_language + '.jpg')" alt="">
                </div>
                <div v-else>
                    {{ serie.original_language }}
                </div>
            </div>
            <div class="vote d-flex">
                <h4>Voto:</h4>
                <p>{{ serie.vote_average }}</p>
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
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}
</script>
<style lang="scss" scoped></style>