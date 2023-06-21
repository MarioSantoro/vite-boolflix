<template>
    <main>
        <ul>
            <li class="" v-for="film in store.listFilms">
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
                    <p>{{ film.original_language }}</p>
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
        }
    }
}   
</script>
<style lang="scss">
li {
    border: 1px solid black;
    width: 35%;
}
</style>