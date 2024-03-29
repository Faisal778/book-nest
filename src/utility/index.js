// import { stringify } from "postcss";
// import { toast } from "react-toastify";

// export const getBooks = () => {
//     let books = [];
//     let storedBooks = localStorage.getItem('books')
//     if (storedBooks){
//         books = JSON.parse(storedBooks)
//     }

//     return books;
    
// }

// // save books 

// export const saveBook = book => {
//     let books = getBooks();
//    const isExist = books.find(b => b.id === book.id) 
//    if (isExist){
//     return toast('Already Wishlisted')
//    }
//    books.push(book)
//    localStorage.setItem('books', JSON.stringify(books))
//    toast('book added to wishlist successfully')
    
// }
// //Delete
// export const deleteBlog = id => {
//     let books = getBooks()
//     const remaining = books.filter(b => b.id !==id)
//     localStorage.setItem('books',JSON.stringify(remaining))
//     toast('book removed successfully');
    
// }

