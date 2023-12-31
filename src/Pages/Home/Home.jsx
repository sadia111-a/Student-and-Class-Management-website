import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Partners from "./Partners";
import Courses from "./Courses";
import FeedBack from "./FeedBack";
import OnlineBook from "./OnlineBook";
import Star from "./Star";
import TeacherClass from "./TeacherClass";
import Stats from "./Stats";

const Home = () => {
  // const { user } = useAuth();
  // if (!user) {
  //   return (
  //     <div className="flex flex-col justify-center items-center min-h-screen">
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <div>
      <Helmet>
        <title>SkillForge | Home</title>
      </Helmet>
      <Banner></Banner>
      <Partners></Partners>
      <Courses></Courses>
      <TeacherClass></TeacherClass>
      <Stats></Stats>
      <FeedBack></FeedBack>
      <OnlineBook></OnlineBook>
      <Star></Star>
    </div>
  );
};

export default Home;
