<template>
    <div class="flip-card me-3">
        <div class="card-inner">
            <div class="card-front face">
                <img :src="`https://image.tmdb.org/t/p/w342/${list.poster_path}`" alt="">
            </div>
            <div class="card-back face">
                <div class="button-cast">
                    <button v-on:click="isHidden = !isHidden, isShow = !isShow" class="btn">
                        <p v-if="isHidden === false">
                            X
                        </p>
                        <p v-else>
                            cast
                        </p>
                    </button>
                </div>
                <div v-if="isShow" class="cast">
                    <h4>Actor:</h4>
                    <div v-for="person in listActor" class="Actor">
                        <p>{{ person.name }}</p>
                    </div>
                    <h4>Genres:</h4>
                    <div v-for="genres in listGen" class="Genres">
                        <p>{{ genres.name }}</p>
                    </div>
                </div>
                <div v-if="isHidden" class="info">
                    <div class="title ">
                        <h5 class="fw-bold">Titolo:</h5>
                        <p v-if="Object.hasOwn(this.list, 'name')">
                            {{ list.name }}
                        </p>
                        <p v-else>
                            {{ list.title }}
                        </p>
                    </div>
                    <div class="title-original ">
                        <h4>Titolo Originale:</h4>
                        <p v-if="Object.hasOwn(this.list, 'original_name')">
                            {{ list.original_name }}
                        </p>
                        <p>
                            {{ list.original_title }}
                        </p>
                    </div>
                    <div class="lang ">
                        <h4>Lingua Originale:</h4>
                        <div v-if="listLanguageImage.includes(list.original_language + '.jpg')">
                            <img :src="getImagePath(list.original_language + '.jpg')" alt="">
                        </div>
                        <div v-else>
                            {{ list.original_language }}
                        </div>
                    </div>
                    <div class="vote d-flex align-items-center">
                        <h4>Voto:</h4>
                        <div class="star" v-for="star in 5">
                            <div class="full-star" v-if="star <= this.starList[index]">
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div v-else class="empty-star">
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="overview ">
                        <h5 class="fw-bold">Overview:</h5>
                        <p class="overflow-auto m-0">{{ this.list.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from "../store.js"
export default {
    props: {
        list: Object,
        index: Number,
        starList: Array,
        listActor: Array,
        listGen: Array,
    },

    data() {
        return {
            listLanguageImage: [
                "it.jpg",
                "en.jpg",
                "ja.jpg",
                "fr.jpg"
            ],
            store,
            isHidden: true,
            isShow: false,
        }
    },

    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },
    }
}

</script>
<style lang="scss" scoped>
div.button-cast {
    text-align: end;

    button {
        background-color: red;
        color: white;
        padding: .12rem .66rem;

        p {
            margin: 0;
        }
    }
}
</style>