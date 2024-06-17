import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
const Book = ({ book }) => {

    const { image, tags, bookName, author, category, rating } = book;

    return (
        <div className='border-2 rounded-2xl p-6' >
            <div className="card bg-[#F3F3F3]">
                <figure><img className='h-56 m-4' src={image} alt="books image" /></figure>
            </div>
            <div className="card-actions justify-start mt-4">
                <div className="badge badge-outline">{tags}</div>
            </div>
            <div className="mt-4 justify-start">
                <h2 className="card-title">{bookName }</h2>
                <p className='pb-5 border-dashed border-b-2'>By: {author}</p>
            </div>
            <div className='flex justify-between mt-4'>
                <p>{category}</p>
                <p className='flex' >{rating} <FaRegStar className='mt-1 ml-2'></FaRegStar> </p>

            </div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object,
    bookId: PropTypes.object,
};
export default Book