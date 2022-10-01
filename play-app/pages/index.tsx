import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { Nav, SearchBar } from "./search";
import { movieAPI, tvAPI } from "../util/getapi";
import Link from "next/link";
import React from "react";

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
  const movienow = props.movienow?.results;
  const tvpopular = props.tvpopular?.results;
  const tvtop = props.tvtop?.results;

  return (
    <>
      <Nav />
      <SearchBar />
      <div className="pl-20 pt-8 pr-20">
        <h1 className="text-xl mb-6 font-extrabold">Movie now playing</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 pb-10">
          {playContent(movienow)}
        </div>
      </div>
      <div className="pl-20 pt-8 pr-20">
        <h1 className="text-xl mb-6 font-extrabold">TV Popular</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 pb-10">
          {playContent(tvpopular)}
        </div>
      </div>
      <div className="pl-20 pt-8 pr-20">
        <h1 className="text-xl mb-6 font-extrabold">Top Rate</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 pb-10">
          {playContent(tvtop)}
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res_movienow = await movieAPI.nowplaying();
  const movienow = res_movienow.data;

  const res_tvpopular = await tvAPI.popular();
  const tvpopular = res_tvpopular.data;
  const res_tvtop = await tvAPI.toprated();
  const tvtop = res_tvtop.data;

  return {
    props: { movienow, tvpopular, tvtop },
  };
};

export const playContent = (value: []): JSX.Element[] => {
  const content = value.map((ele: PlayType) => {
    return (
      <div key={ele.id}>
        <Link href={`/view/${ele.id}`}>
          {ele.poster_path ? (
            <img
              className="mb-2 cursor-pointer"
              src={`https://image.tmdb.org/t/p/w300${ele.poster_path}`}
              alt="img"
            ></img>
          ) : (
            ele.name
          )}
        </Link>
      </div>
    );
  });
  return content;
};
