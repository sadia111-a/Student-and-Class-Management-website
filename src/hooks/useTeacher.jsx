import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTeacher = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: teachers = [] } = useQuery({
    queryKey: ["enroll", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/teachers?email=${user.email}`);
      return res.data;
    },
  });
  return [teachers, refetch];
};

export default useTeacher;
