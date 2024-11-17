import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>

      <div className="flex-grow">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
