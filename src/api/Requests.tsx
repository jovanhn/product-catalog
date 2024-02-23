import axios, { AxiosInstance, } from "axios";

const axiosClient = (): AxiosInstance => {

  return  axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 60000,
    withCredentials: false,
  });
};

export default axiosClient;