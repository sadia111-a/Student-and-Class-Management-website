import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="lg:text-2xl font-semibold font-serif">
        <span>
          Student Home:{" "}
          <b className="mr-5 font-semibold font-serif text-[#D1A054]">
            Hi, Welcome Back!
          </b>
        </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="mt-12">
        <img src="https://i.ibb.co/r01kqTB/student-plan-landing.png" alt="" />
      </div>
    </div>
  );
};

export default UserHome;
