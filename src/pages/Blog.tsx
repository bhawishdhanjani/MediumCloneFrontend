import { useNavigate, useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { Blog as BlogType, useBlog } from "../hoooks";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect } from "react";
import { isLogin } from "../atom";
import { useRecoilValue } from "recoil";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  const login = useRecoilValue(isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) navigate("/signin");
  }, [login]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <FullBlog blog={blog as BlogType} />
    </div>
  );
};

export default Blog;
