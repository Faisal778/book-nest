import React from "react";
import { Link } from "react-router-dom";

const ReadCard = ({ book }) => {
  const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  return (
    <Link to={`/book/${bookId}`} className=" w-full">
      <div className="flex w-full flex-col lg:flex-row space-y-2 border-2 border-green-400 p-10 mx-10 my-5">
       <div >
       <img src={image} className=" h-60 w-60 mr-20 rounded-lg " />
       </div>
       <div className="space-y-2 flex-col lg:flex-row">
            <h3>{bookName}</h3>
            <p>By: {author}</p>
            <div className="flex flex-col lg:flex-row ">
                <p className="mb-4">Tags: </p>
                <p>{
  tags.map((tag, index) => (
    <span className="mr-4 text-green-500 bg-gray-100 rounded-3xl p-2 font-semi-bold" key={index}>{tag}</span>
  ))
} 
</p>
<p>Year of publishing: {yearOfPublishing}</p>
            </div>
            <div className="flex flex-col lg:flex-row">
            <p>publisher: {publisher}</p>
            <p>pages: {totalPages}</p>
            </div>
            <hr />
            <div className="flex space-x-2 flex-col lg:flex-row">
                <button className="btn btn-blue">Category: {category}</button>
                <button className="btn btn-blue">Rating: {rating}</button>
                <button className="btn-btn bg-green-400 rounded-lg p-4">View Details</button>
            </div>



       </div>
       
      </div>
    </Link>
  );
};

export default ReadCard;
