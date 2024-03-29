import React from 'react';
import Wishlists from './Wishlists';
import Read from './Read';

const ListedBooks = () => {
    return (
        <div>
            <div className=' font-bold p-4 bg-gray-100 flex items-center justify-center text-3xl'>
                Books
            </div>
            <div>
                sort
            </div>
            <Wishlists></Wishlists>
            <h2 className='text-4xl font-bold text-center'>READ</h2>
            <Read></Read>


            
        </div>
    );
};

export default ListedBooks;