import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hoooks";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authTokenState, isLogin } from "../atom";
import { useEffect } from "react";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const [token, setAuthToken] = useRecoilState(authTokenState);
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
      <Appbar />

      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name}
              content={blog.content}
              title={blog.title}
              publishedDate="2nd Feb 2022"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
