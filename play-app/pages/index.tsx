import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { Nav, SearchBar } from "./search";
import { movieAPI, tvAPI } from "../util/getapi";

export interface APIType {
  page: number;
  results: [];
  total_pages: number;
  total_result: number;
}

export interface PlayType {
  id: number | null;
  poster_path: string;
  name: string;
  first_air_date: string;
  overview: string;
}

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const tvpopular: PlayType = props.tvpopular?.results;
  const movienow: PlayType = props.movienow?.results;
  const moviepopular: PlayType = props.moviepopular?.results;
  const tvtop: PlayType = props.tvtop?.results;


  console.log("movienow", movienow);
  console.log("moviepopular", moviepopular);

  console.log("tv", tvpopular);
  console.log("tvtop", tvtop);

  return (
    <>
      <Nav />
      <SearchBar />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {

  const res_movienow = await movieAPI.nowplaying();
  const movienow = res_movienow.data;
  const res_moviepopular = await movieAPI.popular();
  const moviepopular = res_moviepopular.data;

  const res_tvpopular = await tvAPI.popular();
  const tvpopular = res_tvpopular.data;
  const res_tvtop = await tvAPI.toprated();
  const tvtop = res_tvtop.data;

  return {
    props: { movienow, moviepopular, tvpopular, tvtop },
  };
};
