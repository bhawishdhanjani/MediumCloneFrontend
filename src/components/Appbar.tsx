import { AppbarAvatar } from "./BlogCard";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="flex border-b justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="flex cursor-pointer flex-col justify-center"
      >
        Medium
      </Link>
      <div className="flex justify-normal">
        <Link
          to={"/publish"}
          type="button"
          className="text-white bg-green-700 mr-4 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          New
        </Link>
        <AppbarAvatar name="Bhawish" size="large" />
      </div>
    </div>
  );
};

export default Appbar;
