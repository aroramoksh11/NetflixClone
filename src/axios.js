import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.netflixrender.org/3",
});

export default instance;
