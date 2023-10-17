<template>
    <main>
        <div v-if="store.listFilms.length === 0">
            <div class="listCard" v-if="(store.listFilmsTopRated.length >= 0)">
                <TopRatedFilms />
                <TopRatedSeries />
            </div>
            <div class="loader" v-else>
                <Loader />
            </div>
        </div>
        <div v-else>
            <div class="listCard" v-if="store.loading === true">
                <AppFilms />
                <AppSeries />
            </div>
            <div class="loader" v-else>
                <Loader />
            </div>
        </div>
    </main>
</template>
<script>
import AppFilms from './AppFilms.vue';
import AppSeries from './AppSeries.vue';
import TopRatedFilms from './TopRatedFilms.vue';
import TopRatedSeries from './TopRatedSeries.vue';
import Loader from './Loader.vue';
import { store } from "../store.js"
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppFilms,
        AppSeries,
        TopRatedFilms,
        TopRatedSeries,
        Loader,
    },
    methods: {

    },
}   
</script>
<style lang="scss" scoped>
main {
    padding-bottom: 2rem;
}
</style>