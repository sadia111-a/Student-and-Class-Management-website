import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClass/AllClasses";
import Teach from "../Pages/Teach/Teach";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleCourse from "../Pages/AllClass/SingleCourse/SingleCourse";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "singleCourse/:_id",
        element: (
          <PrivateRoute>
            <SingleCourse></SingleCourse>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/course`),
      },
    ],
  },
]);
