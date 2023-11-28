import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useClasses = () => {
  // tan stack query
  //   const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    refetch,
    data: classes = [],
    isPending: isLoading,
  } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/classes?email=${user.email}`);
      return res.data;
    },
  });
  return [classes, refetch, isLoading];
};

export default useClasses;
