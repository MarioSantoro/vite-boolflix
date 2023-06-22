<template>
    <h1>Series</h1>
    <ul class="d-flex">
        <li v-for="(serie, index) in  store.listSeries ">
            <div class="flip-card me-3">
                <div class="card-inner">
                    <div class="card-front face">
                        <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" alt="">
                    </div>
                    <div class="card-back face">
                        <div class="title d-flex">
                            <h5 class="fw-bold">Titolo:</h5>
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
                            <div class="star" v-for="star in 5">
                                <div class="full-star" v-if="star <= starsVote[index]">
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div v-else class="empty-star">
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="overview ">
                            <h5 class="fw-bold">Overview:</h5>
                            <p class="overflow-auto m-0">{{ serie.overview }}</p>
                        </div>
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
            this.starsVote = [];
            store.listSeries.forEach(element => {
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