import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { getStoredWishlist } from "../utility/LocalStorage";


const Wishlists = () => {
    const [books, setBooks] = useState([])
    useEffect ( () => {
        const storedBooks = getStoredWishlist()
        setBooks(storedBooks)
}, [])
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			
        {
            books.map( book => (
                <BookCard key= {book.bookId} book = {book}></BookCard>
            ))
        }
		
		</div>
    );
};

export default Wishlists;