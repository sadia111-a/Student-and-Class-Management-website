import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBookOpen } from "react-icons/fa";
import useEnroll from "../hooks/useEnroll";
import useAdmin from "../hooks/useAdmin";
import useTeacher from "../hooks/useTeacher";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [enroll] = useEnroll();
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();

  const navOptions = (
    <>
      <li className="font-serif font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-serif font-bold">
        <Link to="/allClass">All Classes</Link>
      </li>
      <li className="font-sans font-bold">
        <Link to="/teach">
          <span className="font-serif font-bold">Teach On SkillForge</span>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-90 max-w-screen-xl bg-yellow-100 text-black font-medium">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className=" normal-case text-xl flex items-center gap-2">
            <img
              className=" h-[80px] rounded-full"
              src="https://i.ibb.co/WxFzN7q/images.png"
              alt=""
            />
            <span>SkillForge</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex  lg:items-center">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                {user && isAdmin && (
                  <li>
                    <NavLink to="/dashboard/adminHome">
                      <button className="btn btn-sm  btn-ghost">
                        DashBoard <FaBookOpen />
                        <div className="badge badge-secondary">
                          +{enroll.length}
                        </div>
                      </button>
                    </NavLink>
                  </li>
                )}
                {user && isTeacher && (
                  <li>
                    <NavLink to="/dashboard/teacherHome">
                      <button className="btn btn-sm  btn-ghost">
                        DashBoard <FaBookOpen />
                        <div className="badge badge-secondary">
                          +{enroll.length}
                        </div>
                      </button>
                    </NavLink>
                  </li>
                )}
                {user && !isAdmin && !isTeacher && (
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <button className="btn btn-sm  btn-ghost">
                        DashBoard <FaBookOpen />
                        <div className="badge badge-secondary">
                          +{enroll.length}
                        </div>
                      </button>
                    </NavLink>
                  </li>
                )}

                {/* <li>
                  <NavLink to="/dashboard/enroll">
                    <button className="btn btn-sm  btn-ghost">
                      DashBoard <FaBookOpen />
                      <div className="badge badge-secondary">
                        +{enroll.length}
                      </div>
                    </button>
                  </NavLink>
                </li> */}
                <li>
                  <button className="btn btn-sm  btn-ghost" onClick={logOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm font-serif font-bold  btn-ghost">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
