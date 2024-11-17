import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About";
import Brands from "../Pages/Brands";
import MyProfile from "./../Pages/MyProfile";
import Home from "./../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
