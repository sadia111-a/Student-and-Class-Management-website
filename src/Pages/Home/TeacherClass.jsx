import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const TeacherClass = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Teaching"}
        heading={"Teach on SkillForge"}
      ></SectionTitle>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/gWsG6kg/portrait-of-young-female-teacher-holding-ruler-against-chalkboard-DDYG10.jpg"
            className="lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Become an Instructor</h1>
            <p className="py-6">
              Are you passionate about sharing your knowledge and expertise with
              a global audience? SkillForge is the perfect platform for
              educators like you to thrive in the dynamic world of online
              teaching. Join our vibrant community and embark on a rewarding
              journey of knowledge exchange.
            </p>
            <Link to="/teach">
              <button className="btn btn-primary bg-yellow-200 border-0 text-black">
                Start teaching today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherClass;
