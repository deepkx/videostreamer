import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='e94516eabfe8cdece600dc90c9252d74'
//https://api.themoviedb.org/3/trending/movie/day?api_key=e94516eabfe8cdece600dc90c9252d74

const getTrendingVideos = axios.get(movieBaseUrl + 
    "/trending/all/day?api_key="+api_key);

export default {
    getTrendingVideos
}

