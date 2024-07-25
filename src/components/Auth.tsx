import { SingupIutput } from "@bhawishdhanjani/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { authTokenState } from "../atom";
import { useRecoilState } from "recoil";

const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const [token, setAuthToken] = useRecoilState(authTokenState);
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SingupIutput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      setAuthToken(jwt);
      navigate("/blogs");
    } catch (error) {}
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">Create an accout</div>
          <div className="text-slate-400 mb-3 ">
            {type == "signup"
              ? "Already have an account? "
              : "Dont have an account?"}
            <Link
              className="pl-2 underline"
              to={type == "signup" ? "/signin" : "/signup"}
            >
              {type == "signup" ? "Login" : "SignUp"}
            </Link>
          </div>
          {type === "signup" ? (
            <LabelledInput
              label="Name"
              placeholder="Bhavesh Kumar..."
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          ) : null}

          <LabelledInput
            label="Email"
            placeholder="bhawish@gmail.com"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          <LabelledInput
            label="Password"
            placeholder="*****"
            type="password"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            type="button"
            onClick={sendRequest}
            className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Auth;
