import axios from "axios";

//const movieBaseUrl='https://api.themoviedb.org/3'
const api_key='6d2dc53b6cc074823b1e10c1c138207e'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=6d2dc53b6cc074823b1e10c1c138207e';

//https://api.themoviedb.org/3/movie/550?api_key=6d2dc53b6cc074823b1e10c1c138207e
const getTreandingVideos=axios.get('https://api.themoviedb.org/3/trending/all/day?api_key='+api_key);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTreandingVideos,
    getMovieByGenreId
}