import React from "react";
import Nav from "../components/Nav";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import { Outlet } from "react-router-dom";
import Wishlists from "../Pages/Wishlists";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <Outlet></Outlet>

    </div>
  );
};

export default MainLayout;
