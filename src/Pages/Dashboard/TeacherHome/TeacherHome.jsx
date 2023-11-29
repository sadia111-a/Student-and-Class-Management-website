import useAuth from "../../../hooks/useAuth";

const TeacherHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-2xl font-semibold font-serif">
        <span>
          Teacher Home:{" "}
          <b className="mr-5 font-semibold font-serif text-[#cfa76a]">
            Hi, Welcome Back!
          </b>
        </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="mt-12">
        <img
          className="rounded-xl"
          src="https://i.ibb.co/7zsH92L/istockphoto-1215201838-612x612.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default TeacherHome;
