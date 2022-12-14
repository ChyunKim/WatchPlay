import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const movieAPI = {
  nowplaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
};

export const tvAPI = {
  popular: () => api.get("tv/popular"),
  toprated: () => api.get("tv/top_rated"),
};

export const getSearch = (search: string) =>
  axios.get(
    `https://api.themoviedb.org/3/search/tv/?api_key=${API_KEY}&query=${search}`
  );

export const getDetail = (id: number) =>
  axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
  );

export const getKey = (id: number) =>
  axios.get(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`
  );
