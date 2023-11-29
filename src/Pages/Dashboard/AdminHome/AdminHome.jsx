import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl font-semibold font-serif">
        <span>
          Admin Home:
          <b className="mr-5 font-semibold font-serif text-[#D1A054]">
            Hi, Welcome Back!
          </b>
        </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="mt-12">
        <img
          className="w-1/2"
          src="https://i.ibb.co/dmdNxSj/Admin-1-B.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default AdminHome;
