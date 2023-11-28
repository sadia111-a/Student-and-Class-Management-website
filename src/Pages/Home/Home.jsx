import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Partners from "./Partners";
import Courses from "./Courses";
import FeedBack from "./FeedBack";
import OnlineBook from "./OnlineBook";
import Star from "./Star";
import TeacherClass from "./TeacherClass";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SkillForge | Home</title>
      </Helmet>
      <Banner></Banner>
      <Partners></Partners>
      <Courses></Courses>
      <TeacherClass></TeacherClass>
      <FeedBack></FeedBack>
      <OnlineBook></OnlineBook>
      <Star></Star>
    </div>
  );
};

export default Home;
