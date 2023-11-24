const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/rbNV8Gx/pexels-julia-m-cameron-4145190.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center font-serif text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-3 text-3xl lg:text-5xl text-white font-bold">
            Welcome to SkillForge
          </h1>
          <p className="mb-3 text-xl text-orange-200 font-bold">
            Unlock Your Potential, Learn New Skills
          </p>
          <p className="mb-5 text-lg">
            🎓 Explore Diverse Courses: Immerse yourself in a rich catalog of
            courses designed to enhance your skills. From coding and design to
            business and beyond, discover the learning path that suits you.{" "}
            <br /> 🌐 Connect with Instructors: Engage with experienced
            instructors passionate about sharing their knowledge. Our virtual
            classrooms foster collaboration and open communication, ensuring a
            dynamic learning experience. <br /> 🏆 Track Your Progress: Monitor
            your growth with our intuitive progress tracking system. See your
            achievements, review completed courses, and celebrate milestones on
            your personalized learner's dashboard. <br />
            💬 Join the Community: Connect with fellow learners through forums
            and discussion boards. Share insights, seek advice, and become part
            of a supportive community dedicated to continuous learning. <br />{" "}
            🚀 Stay Updated: Receive timely notifications about upcoming
            classes, new courses, and special events. Never miss an opportunity
            to expand your skill set and stay ahead in your chosen field. <br />{" "}
            🔒 Secure Transactions: Experience peace of mind with our secure
            payment gateway. Enroll in premium courses with confidence, knowing
            your transactions are protected. <br /> 🌟 Earn Certificates:
            Validate your achievements with certificates and badges upon course
            completion. Showcase your skills to the world and take pride in your
            educational journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
