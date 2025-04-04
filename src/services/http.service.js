import axios from "axios";

const httpService = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default {
  get: httpService.get,
  post: httpService.post,
  delete: httpService.delete,
  put: httpService.put,
  patch: httpService.patch,
};
