import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSearch } from "../../util/getapi";
import { Nav, SearchBar } from "../search"
import { playContent } from "..";

const Searchpage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const searchdata = props.saerchtv?.results

  return(
    <>
      <Nav />
      <SearchBar />
      <div className="pt-8 pl-20 pr-20 text-2xl font-bold mb-10 text-black">
        <h1 className="text-xl mb-6 font-extrabold">
          Search Results
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 pb-10">
          {playContent(searchdata)}
        </div>
    </div>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async (props) => {
  const search = String(props.query.search);
  const res = await getSearch(search);
  const saerchtv = res.data;

  return {
    props: { saerchtv },
  };
};

export default Searchpage;
