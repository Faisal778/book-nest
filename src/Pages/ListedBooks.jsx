import React from 'react';
import Wishlists from './Wishlists';

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


            
        </div>
    );
};

export default ListedBooks;