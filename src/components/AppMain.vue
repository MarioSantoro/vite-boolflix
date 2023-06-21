<template>
    <main>
        <div class="film ">
            <AppFilms />
        </div>
        <div class="series">
            <AppSeries />
        </div>
    </main>
</template>
<script>
import AppFilms from './AppFilms.vue';
import AppSeries from './AppSeries.vue';
export default {
    data() {
        return {
        }
    },
    components: {
        AppFilms,
        AppSeries
    },
}   
</script>
<style lang="scss" scoped></style>