import axios from "axios";
import dotenv  from "dotenv";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjNmOGJlY2ZmYjBlZTM5OWY1ODI0ZjM4MTU5MmRhNCIsInN1YiI6IjY0MTZmNWVlZTc0MTQ2MDA4NjcxZGZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.74t9wzKF-JXkA8s9ipjwzddvJ_y3XHt_SF4QGTGAGfY";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
   " Content-Type": 'application/json'
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers
,            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};