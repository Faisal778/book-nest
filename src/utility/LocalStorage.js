import { toast } from "react-toastify";

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    } return [];
}

const saveWishlist = book => {
    const storedWishlist = getStoredWishlist();
    const exist = storedWishlist.find(bookId => bookId === book.id);
    if(!exist){
       
        storedWishlist.push(book);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist))
    } 
}
export {getStoredWishlist, saveWishlist};