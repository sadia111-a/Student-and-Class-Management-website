import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  const location = useLocation();

  const noHearderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div className="max-w-7xl mx-auto">
      {noHearderFooter || <Navbar></Navbar>}
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>

      {noHearderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
