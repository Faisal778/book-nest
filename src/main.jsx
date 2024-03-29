import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ListedBooks from "./Pages/ListedBooks.jsx";
import PagesToRead from "./Pages/PagesToRead.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import books from "../public/books.json";
import Book from "./Pages/Book.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Wishlists from "./Pages/Wishlists.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        index: true,
        element: <Home books={books}></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:id",
        element: <Book></Book>,
        loader: () => fetch("../books.json"),
      },
      // {
      //   path:"/wishlist",
      //   element: <Wishlist books={books}></Wishlist>
      // },
      {
        path:"/wishlists",
        element: <Wishlists books = {books}></Wishlists>,
        loader: () => fetch("../books.json"),
      },
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
