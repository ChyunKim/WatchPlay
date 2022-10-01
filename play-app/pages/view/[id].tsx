import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Nav } from "../search";
import { getDetail, getKey } from "../../util/getapi";

const Viewpage = () =>
  // props: InferGetServerSidePropsType<typeof getServerSideProps>
  {
    // console.log(props.key);
    // console.log(props.detail);

    return (
      <>
        <Nav />
      </>
    );
  };

// export const getServerSideProps: GetServerSideProps = async (props) => {
//   const id: number = Number(props.query.id);

//   const res_detail = await getDetail(id);
//   const detail = res_detail.data;

//   const res_key = await getKey(id);
//   const key = res_key.data.results;

//   return {
//     props: { id, detail, key },
//   };
// };

export default Viewpage;
