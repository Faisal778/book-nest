import React, { useEffect, useState } from 'react';
import { getStoredRead } from '../utility/LocalStorage';
import BookCard from '../components/BookCard';
import ReadCard from '../components/ReadCard';

const Read = () => {
        const [books1, setBooks] = useState([])
        useEffect ( () => {
            const storedBooks = getStoredRead()
            setBooks(storedBooks)
    }, [])
    return (
        <div className="grid  grid-cols-1 mb-4 ">
			
        {
            books1.map( book => (
                <ReadCard key= {book.bookId} book = {book}></ReadCard>
            ))
        }
		
		</div>
    );
};

export default Read;