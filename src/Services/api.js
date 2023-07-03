//BASE DA API: https://api.themoviedb.org/3/
//URL DA API: movie/now_playing?api_key=540e44f53147417276c62d0661e2f51f&language=pt-BR


import axios from "axios";

const api = axios.create({
    baseURL: 'https://https://api.themoviedb.org/3/movie/157336?api_key=540e44f53147417276c62d0661e2f51f.themoviedb.org/3/'
});

export default api;