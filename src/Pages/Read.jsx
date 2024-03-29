import React, { useEffect, useState } from 'react';
import { getStoredRead } from '../utility/LocalStorage';
import BookCard from '../components/BookCard';

const Read = () => {
        const [books1, setBooks] = useState([])
        useEffect ( () => {
            const storedBooks = getStoredRead()
            setBooks(storedBooks)
    }, [])
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			
        {
            books1.map( book => (
                <BookCard key= {book.bookId} book = {book}></BookCard>
            ))
        }
		
		</div>
    );
};

export default Read;