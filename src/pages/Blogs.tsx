import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hoooks";
import LoadingSpinner from "../components/LoadingSpinner";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

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
