import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      className="w-72 mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block rounded-lg border-2 bg-gray-50 border-gray-200">
      <img src={image} className="p-8 px-14 object-fit w-72 h-56 " />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>

        <p>By: {author}</p>
        <hr />
        <div className="flex justify-between pt-4">
          <p className=" text-xs text-gray-400 dark:text-gray-600">{category}</p>
          <p>{rating} &#9734;</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
