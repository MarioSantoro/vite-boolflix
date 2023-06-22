<template>
    <h1>Films</h1>
    <ul class="d-flex">
        <li v-for="(film, index) in  store.listFilms ">
            <div class="flip-card me-3">
                <div class="card-inner">
                    <div class="card-front face">
                        <img :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
                    </div>
                    <div class="card-back face">
                        <div class="title ">
                            <h5 class="fw-bold">Titolo:</h5>
                            <p>{{ film.title }}</p>
                        </div>
                        <div class="title-original">
                            <h5 class="fw-bold">Titolo Originale:</h5>
                            <p>{{ film.original_title }}</p>
                        </div>
                        <div class="lang ">
                            <h5 class="fw-bold">Lingua Originale:</h5>
                            <div v-if="listLanguageImage.includes(film.original_language + '.jpg')">
                                <img :src="getImagePath(film.original_language + '.jpg')" alt="">
                            </div>
                            <div v-else>
                                {{ film.original_language }}
                            </div>
                        </div>
                        <div class="vote d-flex">
                            <h5 class="fw-bold">Voto:</h5>
                            <div class="star" v-for="star in 5">
                                <div class="full-star" v-if="star <= starsVote[index]">
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div v-else class="empty-star">
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="overview overflow-auto">
                            <h5 class="fw-bold">Overview:</h5>
                            <p class="overflow-auto">{{ film.overview }}</p>
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