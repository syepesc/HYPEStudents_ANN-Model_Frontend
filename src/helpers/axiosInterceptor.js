import axios from "axios";
import envs from "../config/env";

let headers = {
  "content-type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

export default axiosInstance;
