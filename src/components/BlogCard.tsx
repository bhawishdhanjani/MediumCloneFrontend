import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authTokenState } from "../atom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md  cursor-pointer">
        <div className="flex">
          <div className="">
            <Avatar name={authorName} />
          </div>
          <div className="pl-2 flex flex-col justify-center text-sm font-extralight">
            {authorName}
          </div>
          <div className="flex text-xs text-slate-400 flex-col justify-center pl-2">
            &#9679;
          </div>
          <div className="pl-2 flex flex-col justify-center text-sm text-slate-400 font-thin">
            {publishedDate}
          </div>
        </div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="font-thin text-base">{content.slice(0, 200)}..</div>
        <div className="text-slate-500 text-sm font-extralight">
          {Math.ceil(content.length / 100)} minutes(s) read
        </div>
      </div>
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "large";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size == "small" ? "w-6 h-6" : "w-10 h-10"
      }  overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          size == "small" ? "font-xs" : "font-medium"
        }  text-gray-600 dark:text-gray-300`}
      >
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}

export function AppbarAvatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "large";
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [, setAuthToken] = useRecoilState(authTokenState);
  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className={`relative cursor-pointer inline-flex items-center justify-center ${
          size == "small" ? "w-6 h-6" : "w-10 h-10"
        }  overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600`}
      >
        <span
          className={`${
            size == "small" ? "font-xs" : "font-medium"
          }  text-gray-600 dark:text-gray-300`}
        >
          {name[0].toUpperCase()}
        </span>
      </div>
      {open && (
        <div className="bg-white p-2 border-slate-200  border-2 w-52 shadow-lg  shadow-slate-500 absolute -left-40 top-14">
          <ul>
            <li
              className="w-full font-semibold p-1 text-base cursor-pointer rounded hover:bg-blue-200"
              onClick={() => {
                localStorage.removeItem("token");

                setAuthToken("");
                navigate("/signin");
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BlogCard;
