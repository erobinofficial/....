import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { IoMdHome } from "react-icons/io";
import { BiSolidCoupon } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/"> <IoMdHome />
        Home</NavLink>
      </li>
      <li>
        <NavLink to="/brands"><BiSolidCoupon />
        Brands</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile"><CgProfile />
         My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/about"><FcAbout />
        About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="w-[80px] ">
          <img  src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        <Link className="btn" to="/register">
          Registration
        </Link>
        <Link className="btn" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
