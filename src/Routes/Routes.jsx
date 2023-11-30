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
import Dashboard from "../Layout/Dashboard";
import Enroll from "../Pages/Dashboard/Enroll/Enroll";
import EnrollDetails from "../Pages/Dashboard/EnrollDetails";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";
import TeacherReq from "../Pages/Dashboard/TeacherReq/TeacherReq";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "../Provider/AdminRoute";

import MyClass from "../Pages/Dashboard/TeacherClass/MyClass";
import AllClass from "../Pages/Dashboard/AllClass/AllClass";
import UpdateClass from "../Pages/Dashboard/UpdateClass/UpdateClass";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import TeacherHome from "../Pages/Dashboard/TeacherHome/TeacherHome";

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
        loader: () =>
          fetch("https://student-learn-server.vercel.app/courseCount"),
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
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "singleCourse/:_id",
        element: (
          <PrivateRoute>
            <SingleCourse></SingleCourse>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://student-learn-server.vercel.app/course`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // normal user route
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "enroll",
        element: <Enroll></Enroll>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addClass",
        element: <AddItems></AddItems>,
      },
      {
        path: "allClass",
        element: <AllClass></AllClass>,
      },
      {
        path: "teacherReq",
        element: (
          <AdminRoute>
            <TeacherReq></TeacherReq>
          </AdminRoute>
        ),
      },
      // teachers route
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "teacherHome",
        element: <TeacherHome></TeacherHome>,
      },
      {
        path: "updateClass/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) =>
          fetch(`https://student-learn-server.vercel.app/classes/${params.id}`),
      },
      {
        path: "users",
        element: <Allusers></Allusers>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "enroll/enrollClass/:_id",
        element: <EnrollDetails></EnrollDetails>,
        loader: () => fetch(`https://student-learn-server.vercel.app/enroll`),
      },
    ],
  },
]);
