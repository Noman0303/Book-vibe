import { useEffect, useState } from "react";
import ReadBooks from "./ReadBooks";
import WishListBooks from "./WishListBooks";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishListedBook } from "../Utility/localStorage";

const ListedBooks = () => {

  // Tab details
  const [activeTab, setActiveTab] = useState('read');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Read Book Function

  const readBooks = useLoaderData();
  const [booksRead, setBooksRead] = useState([]);

  useEffect(() => {
    const storedReadBooks = getStoredReadBook();

    if (readBooks.length > 0) {
      const filteredBooks = readBooks.filter(readBook => storedReadBooks.includes(readBook.bookId))
      setBooksRead(filteredBooks);
    }
  }, [readBooks])

  // wish Listed Book Function

  const wishListedBooks = useLoaderData();
  const [booksWishListed, setBooksWishListed] = useState([]);

  useEffect(() => {
    const storedWishListedBooks = getStoredWishListedBook();

    if (wishListedBooks.length > 0) {
      const filteredWishBooks = wishListedBooks.filter(wishListedBook => storedWishListedBooks.includes(wishListedBook.bookId))
      setBooksWishListed(filteredWishBooks);
    }
  }, [wishListedBooks])




  return (
    <div >
      <div className="text-center w-full py-4 lg:py-8 bg-[#1313130D] bg-opacity-95 h-16 lg:h-24 rounded-2xl">
        <h2 className="font-bold text-xl lg:text-3xl ">Books</h2>
      </div>

      <div className="text-center">
        <details className="dropdown mt-8">
          <summary className="m-1 btn text-white bg-[#23BE0A]">Sort By <RiArrowDropDownLine></RiArrowDropDownLine> </summary>
          <ul className="shadow menu dropdown-content z-[1] rounded-box w-52">
            <li><a>Rating</a></li>
            <li><a>Number Of pages</a></li>
            <li><a>Published Year</a></li>
          </ul>
        </details>
      </div>

      <div role="tablist" className="tabs flex mt-14 ">

        <button
          role="tab"
          aria-selected={activeTab === 'read'}
          aria-controls="read-panel"
          onClick={() => handleTabClick('read')}
          className={`px-4 tab-button ${activeTab === 'read' ? 'border-blue-500 border-b-2 text-black py-2 tab-active' : 'border-transparent text-gray-400 '}`}>
          Read Books
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'wishlist'}
          aria-controls="wishlist-panel"
          onClick={() => handleTabClick('wishlist')}
          className={`px-4 tab-button ${activeTab === 'wishlist' ? 'border-blue-500 border-b-2 text-black py-2' : 'border-transparent text-gray-400 '}`}>
          Wishlist Books
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'read' && (
          <div>
            {booksRead.length > 0 ? (
              booksRead.map(readBook => (
                <ReadBooks key={readBook.bookId} readBook={readBook}></ReadBooks>
              ))
            ) : (
              <p>No read books available</p>
            )}
          </div>
        )}
      </div>

      <div className="mt-4">
        {activeTab === 'wishlist' && (
          <div>
            {booksWishListed.length > 0 ? (
              booksWishListed.map(wishListedBook => (
                <WishListBooks key={wishListedBook.bookId} wishListedBook={wishListedBook}></WishListBooks>
              ))
            ) : (
              <p>No read books available</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}




export default ListedBooks