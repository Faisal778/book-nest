import React from 'react';
import Nav from '../components/Nav';
import Home from '../Pages/Home';
import ListedBooks from '../Pages/ListedBooks';
import PagesToRead from '../Pages/PagesToRead';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Home></Home>
            <ListedBooks></ListedBooks>
            <PagesToRead></PagesToRead>
            
        </div>
    );
};

export default MainLayout;