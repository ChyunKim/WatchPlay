import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
const accout = () => {
  const router = useRouter();

  const checkLogin = () => {
    axios.get("api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        // 로그인성공
      } else {
        router.push("/register");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  });
};

export default accout;
