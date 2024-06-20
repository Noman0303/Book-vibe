const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-books')
    if (storedReadBook) {
        return JSON.parse (storedReadBook)
    }
    return [];
}

const saveReadBooks = bookId =>{
    const storedReadBooks = getStoredReadBook () ;
    const exists = storedReadBooks.find ( readBookId => readBookId === bookId);
    if(!exists){
        storedReadBooks.push (bookId);
        localStorage.setItem ('read-books',JSON.stringify(storedReadBooks))
    }
}

const getStoredWishListedBook = () => {
    const storedWishListedBook = localStorage.getItem('WishListed-books')
    if (storedWishListedBook) {
        return JSON.parse (storedWishListedBook)
    }
    return [];
}

const saveWishListedBooks = bookId =>{
    const storedWishListedBooks = getStoredWishListedBook () ;
    const exists = storedWishListedBooks.find ( WishListedBookId => WishListedBookId === bookId);
    if(!exists){
        storedWishListedBooks.push (bookId);
        localStorage.setItem ('WishListed-books',JSON.stringify(storedWishListedBooks))
    }
}

export {saveReadBooks,getStoredReadBook,getStoredWishListedBook,saveWishListedBooks}