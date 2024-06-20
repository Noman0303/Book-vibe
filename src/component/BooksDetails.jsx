import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks, saveWishListedBooks } from "../Utility/localStorage";


const BooksDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find(book => book.bookId === idInt);

  const handleReadBook = () => {
    saveReadBooks (bookId);
    toast ('Book added to Read Books section successfully');
  };
  const handleWishListedBook = () => {
    saveWishListedBooks (bookId);
    toast ('Book added to Wish listed Books section successfully');
  };


  const { bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating, image } = book;

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mt-12">
      <div>
      <img className="h-auto rounded-2xl" src={image} alt="" />
      </div>
      <div>
        <h2 className="font-bold text-2xl lg:text-4xl ">{bookName}</h2>
        <p className="font-medium text-xl lg:my-4 py-4 border-b-2">By: {author}</p>
        <p className="font-medium text-xl lg:my-4 py-4 border-b-2">By: {category}</p>
        <p className="mt-5 "><span className="font-semibold">Review : </span>{review}</p>
        <p className="mt-4 mb-4 border-b-2"> <span className="font-bold">Tag</span> <span className="badge badge-outline ml-4 bg-[#23BE0A0D] opacity-95 text-[#23BE0A] mb-4">{tags}</span></p>

        <p> <span className="font-normal mr-16 text-[#131313B3] opacity-70">Number of Pages:</span> <span className="font-semibold">{totalPages}</span></p>

        <p className="mt-3"> <span className="font-normal mr-32 text-[#131313B3] opacity-70">Publisher:</span> <span className="font-semibold">{publisher}</span></p>

        <p className="mt-3"> <span className="font-normal mr-16 text-[#131313B3] opacity-70">Year of Publishing:</span> <span className="font-semibold">{yearOfPublishing}</span></p>

        <p className="mt-3"> <span className="font-normal mr-36 text-[#131313B3] opacity-70">Rating:</span> <span className="font-semibold">{rating}</span></p>

        <div className="mt-8 mb-4">
        
        <button className="btn w-24 font-semibold mr-4" onClick={handleReadBook} >Read</button>
              
        <button className="btn w-32 bg-[#50B1C9] text-white font-semibold" onClick={handleWishListedBook}  >WishList</button>
  
        
        </div>
        
      </div>
      <ToastContainer />
    </div>

  )
}

export default BooksDetails