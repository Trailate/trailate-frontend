import axios from "axios";

const instance = axios.create({
  baseURL: `https://trailate.com/api/v1`,
  timeout: 12000,
});

export { instance };
