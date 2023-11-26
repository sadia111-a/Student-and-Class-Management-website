import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useEnroll = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: enroll = [] } = useQuery({
    queryKey: ["enroll", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enroll?email=${user.email}`);
      return res.data;
    },
  });
  return [enroll, refetch];
};

export default useEnroll;
