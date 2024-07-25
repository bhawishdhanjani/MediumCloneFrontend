import { ChangeEvent, useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilValue } from "recoil";
import { isLogin } from "../atom";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const login = useRecoilValue(isLogin);

  const navigate = useNavigate();
  useEffect(() => {
    if (!login) navigate("/signin");
  }, [login]);

  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full  pt-8">
        <div className="max-w-screen-lg w-full">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
          ></input>
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <div className="flex justify-center mt-2">
            <button
              onClick={async () => {
                await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title: title,
                    content: content,
                    published: true,
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                );
                navigate("/blogs");
              }}
              type="button"
              className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Publish Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-2">
      <textarea
        id="message"
        onChange={onChange}
        rows={10}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none "
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
}

export default Publish;
