import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const Stats = () => {
  const { user, loading } = useAuth();

  const axiosPublic = useAxiosPublic();
  const { data: stats } = useQuery({
    queryKey: ["users-stats"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/users-stats");
      return res.data;
    },
  });

  // if (!user) {
  //   return (
  //     <div className="flex flex-col justify-center items-center min-h-screen">
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <div>
      <SectionTitle
        heading={"Statistics Overview"}
        subHeading={"Key Metrics of Our Platform"}
      ></SectionTitle>
      <div className="flex justify-center">
        <div className="stats shadow ">
          <div className="stat">
            <div className="stat-figure lg:text-5xl text-secondary">
              <FaUsers />
            </div>
            <div className="stat-title text-black font-bold">Total Users</div>
            <div className="stat-value">23</div>
            <div className="stat-desc">Jun 1st - Dec 1st</div>
          </div>
          {/* {stats?.users || "23"} */}
          <div className="stat">
            <div className="stat-figure lg:text-5xl text-secondary">
              <SiGoogleclassroom />
            </div>
            <div className="stat-title text-black font-bold">
              Total Classes:
            </div>
            <div className="stat-value">26</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure lg:text-5xl text-secondary">
              <FaUserGraduate />
            </div>
            <div className="stat-title text-black font-bold">
              Total Enrolment:
            </div>
            <div className="stat-value">48</div>
            <div className="stat-desc">↗︎ 500 (33%)</div>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/74HQxTW/overview-of-online-learning.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
