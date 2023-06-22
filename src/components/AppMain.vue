<template>
    <main>
        <AppFilms />
        <AppSeries />
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