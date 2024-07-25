import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { Blog as BlogType, useBlog } from "../hoooks";
import LoadingSpinner from "../components/LoadingSpinner";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
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
