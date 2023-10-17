<template>
    <main>
        <div v-if="store.listFilms.length === 0">
            <div class="listCard" v-if="(store.listFilmsTopRated.length >= 0)">
                <AppTopRatedFilms />
                <AppTopRatedSeries />
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
import AppTopRatedFilms from './TopRatedfilms.vue';
import AppTopRatedSeries from './TopRatedSeries.vue';
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
        AppTopRatedFilms,
        AppTopRatedSeries
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