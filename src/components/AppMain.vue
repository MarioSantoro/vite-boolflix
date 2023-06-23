<template>
    <main>
        <TopRatedFilms v-if="store.listFilms.length === 0" />
        <div v-else>
            <AppFilms />
            <AppSeries />
        </div>
    </main>
</template>
<script>
import AppFilms from './AppFilms.vue';
import AppSeries from './AppSeries.vue';
import TopRatedFilms from './TopRatedFilms.vue';
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