import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import { saveWishlist } from "../utility/LocalStorage";
import Wishlists from "./Wishlists";
import { saveBook } from "../utility";

const Book = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);

  const handleAddToWishlist = (book) => {
    toast("Book added to wishlist");
    saveWishlist(book);
    // saveBook(book);
    
  };
  const handleAddtoRead = () => {
    toast("Book added to Read");
  };
  return (
    <section className="p-4 lg:p-8  bg-white text-black">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img src={book.image} alt="" className=" bg-gray-500 aspect-video lg:w-1/3" />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-3xl font-bold uppercase text-black">{book.bookName}</span>

            <p className="my-2">By: {book.author}</p>
            <hr />
            <p className="my-2">{book.category}</p>
            <hr />

            <h3 className="text-normal font-bold mt-4">
              <span className="font-bold">Review: </span>
              {book.review}
            </h3>
            <p className="my-6 text-gray-400">tags....</p>

            <hr />

            <div className="space-y-2 my-4">
              <p>Number of Pages: {book.totalPages}</p>
              <p>Publisher: {book.publisher}</p>
              <p>Year of Pulbishing: {book.yearOfPublishing}</p>
              <p>Rating: {book.rating}</p>
            </div>
            <div>
              <button onClick={handleAddtoRead} type="button" className="self-start btn btn-primary mr-2">
                Read
              </button>
              <button onClick={handleAddToWishlist(book)} type="button" className="self-start btn btn-primary">
                Wishlist
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
