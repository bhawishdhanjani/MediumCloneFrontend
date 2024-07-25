import axios from "axios";
import { atom, selector } from "recoil";
import { BACKEND_URL } from "./config";

export const authTokenState = atom({
  key: "authTokenState",
  default: localStorage.getItem("token") || "",
});

// Selector to validate the token
export const isLogin = selector({
  key: "isLogin",
  get: async ({ get }) => {
    const token = get(authTokenState);
    if (!token) {
      return false;
    }
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/validate`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data.valid as boolean;
    } catch (error) {
      return false;
    }
  },
});
