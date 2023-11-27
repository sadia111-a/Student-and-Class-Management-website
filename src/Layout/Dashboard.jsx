import { FaBook, FaHome } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaUsersGear } from "react-icons/fa6";

import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex max-w-7xl mx-auto">
      {/* dashboard side bar */}
      <div className="lg:w-64 min-h-screen bg-yellow-200">
        <ul className="menu p-4 ">
          {isAdmin ? (
            <>
              <li className="mb-3">
                <NavLink to="/dashboard/teacherReq">
                  <GiTeacher />
                  Teacher Request
                </NavLink>
              </li>
              <li className="mb-3">
                <NavLink to="/dashboard/users">
                  <FaUsersGear />
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">
                  <CgProfile />
                  Profile
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mb-3">
                <NavLink to="/dashboard/enroll">
                  <FaBook></FaBook>My enroll class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">
                  <CgProfile />
                  Profile
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* shared navlink for both admin and user */}
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allClass">
              <FaBook></FaBook>
              All Classes
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 lg:p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
