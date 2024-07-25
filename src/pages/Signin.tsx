import { useRecoilValue } from "recoil";
import Auth from "../components/Auth";
import Quote from "../components/Quote";
import { isLogin } from "../atom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signin = () => {
  const login = useRecoilValue(isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (login) navigate("/blogs");
  }, [login]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signin" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signin;
