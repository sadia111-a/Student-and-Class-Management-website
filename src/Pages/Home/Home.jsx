import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Partners from "./Partners";
import Courses from "./Courses";
import FeedBack from "./FeedBack";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SkillForge | Home</title>
      </Helmet>
      <Banner></Banner>
      <Partners></Partners>
      <Courses></Courses>
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;
