import type { NextPage } from "next";
import { Nav, SearchBar } from "./search";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <SearchBar />
    </>
  );
};

export default Home;
