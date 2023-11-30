import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://student-learn-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
