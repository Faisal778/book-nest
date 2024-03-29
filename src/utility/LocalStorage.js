
import toast from "react-hot-toast";


const getStoredWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

const saveWishlist = (book) => {
  const storedWishlist = getStoredWishlist();
  const exist = storedWishlist.find((bookId) => bookId === book.id);
  if (!exist) {
    storedWishlist.push(book);
    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));

  }

};

const getStoredRead = () => {
  const storedRead = localStorage.getItem("Read");
  if (storedRead) {
    return JSON.parse(storedRead);
  }
  return [];
};

const saveRead = (book) => {
  const storedRead = getStoredRead();
  const exist = storedRead.find((bookId) => bookId === book.id);
  if (!exist) {
    storedRead.push(book);
    localStorage.setItem("Read", JSON.stringify(storedRead));
  }
};

export { getStoredWishlist, saveWishlist, getStoredRead, saveRead };
