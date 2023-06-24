<template>
    <select name="genres" id="type" placeholder="Choose">
        <option v-for="gen in store.listAllGen" :value="gen.name" @click="$emit('select', gen.id)">
            {{ gen.name }}
        </option>
    </select>
</template>
<script>
import axios from 'axios';
import { store } from "../store.js"
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getAllGen() {
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=65244d6f06d68cdb45fac9568796af91&language=it-IT`)
                .then((response) => {
                    store.listAllGen = response.data.genres;
                    console.log(store.listAllGen)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.getAllGen()
    }
}
</script>
<style lang="scss">
select {
    border: none;
    border-radius: 1rem;
    padding: .22rem .44rem;
    background-color: rgba(70, 67, 67, 0.993);
    overflow: auto;

    option {
        height: 100px;
    }
}
</style>