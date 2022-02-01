import axios from "axios";

const instance = axios.create({
  baseURL: `http://lenserver.one:8888`,
  timeout: 12000,
});
