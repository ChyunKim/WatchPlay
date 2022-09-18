import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSearch } from "../../util/getapi";

const Searchpage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log(props.searchresult);
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (props) => {
  const search = String(props.query.search);
  const res = await getSearch(search);
  const searchresult = res.data;

  return {
    props: { searchresult },
  };
};

export default Searchpage;
