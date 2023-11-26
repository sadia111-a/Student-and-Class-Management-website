import { FaBook, FaHome } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex max-w-7xl mx-auto">
      {/* dashboard side bar */}
      <div className="lg:w-64 min-h-screen bg-yellow-200">
        <ul className="menu p-4 ">
          <li className="mb-3">
            <NavLink to="/dashboard/enroll">
              <FaBook></FaBook>My enroll class
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/enroll">
              <CgProfile />
              Profile
            </NavLink>
          </li>
          <div className="divider"></div>
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
