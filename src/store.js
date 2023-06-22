import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    loading: true,
    listFilms: [],
    listSeries: [],
    listActor: [],
});