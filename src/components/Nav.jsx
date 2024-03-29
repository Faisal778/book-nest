import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-400 border-green-400 border-2 rounded-md" : "font-semibold")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listedbooks"
                className={({ isActive }) => (isActive ? "text-green-400 border-green-400 border-2 rounded-md" : "font-semibold")}>
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagestoread"
                className={({ isActive }) => (isActive ? "text-green-400 border-green-400 border-2 rounded-md" : "font-semibold")}>
                Pages To Read
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Book Nest{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-green-400 border-green-400 border-2 rounded-md font-semibold" : "font-semibold")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listedbooks"
              className={({ isActive }) => (isActive ? "text-green-400 border-green-400 border-2 rounded-md font-semibold" : "font-semibold")}>
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pagestoread"
              className={({ isActive }) => (isActive ? "text-green-400 border-green-400 border-2 rounded-md font-semibold" : "font-semibold")}>
              Pages To Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-2 bg-green-400 hidden md:flex">Sign In</a>
        <a className="btn bg-blue-400 hidden md:flex">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
