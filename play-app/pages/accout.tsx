import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Nav } from "./search";

const accout = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    axios.get("api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        setIsLogin(true);
      } else {
        router.push("/register");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  });

  const eventLogout = () => {
    axios.get("api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  return (
    <>
      <Nav />
      {isLogin && (
        <div className="pt-28 bg-gray-800 text-white w-full text-lg pb-8">
          <div className="block pl-20 w-full">
            <span className="font-bold text-2xl">my account</span>
            <button
              className="float-right mr-20 bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-4 rounded"
              onClick={eventLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default accout;
