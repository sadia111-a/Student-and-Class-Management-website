import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCourse = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: course = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await axiosPublic.get("/course");
      return res.data;
    },
  });

  return [course, loading, refetch];
};

export default useCourse;
