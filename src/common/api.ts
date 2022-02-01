import axios from "axios";

const instance = axios.create({
  baseURL: `http://lenserver.one/api/v1`,
  timeout: 12000,
});

export { instance };
