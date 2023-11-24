import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClass/AllClasses";
import Teach from "../Pages/Teach/Teach";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allClass",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "teach",
        element: <Teach></Teach>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
