import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`,
  },
});

export default api;
