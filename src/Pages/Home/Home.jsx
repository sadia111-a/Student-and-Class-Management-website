import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Partners from "./Partners";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SkillForge | Home</title>
      </Helmet>
      <Banner></Banner>
      <Partners></Partners>
    </div>
  );
};

export default Home;
