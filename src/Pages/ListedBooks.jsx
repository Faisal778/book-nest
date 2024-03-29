import React from "react";
import Wishlists from "./Wishlists";
import Read from "./Read";

const ListedBooks = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className=" font-bold p-4 bg-gray-100 flex items-center justify-center text-3xl">Books</div>
      <div className="flex justify-center my-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By{" "}
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center mb-10">Wishlist</h2>
      <Wishlists></Wishlists>
      <h2 className="text-4xl font-bold text-center">READ</h2>
      <Read></Read>
    </div>
  );
};

export default ListedBooks;
