import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link} from 'react-router-dom';
const Book = ({ book }) => {



    const { bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <div>

            <Link to={`/book/${bookId}`} >
            <button className='border-2 rounded-2xl p-6 w-full'>
            <div className="card bg-[#F3F3F3]">
                <figure><img className='h-56 m-4' src={image} alt="books image" /></figure>
            </div>
            <div className="card-actions justify-start mt-4">
                {tags && <div className="badge badge-outline">{tags}</div>}
            </div>
            <div className="mt-4 justify-start">
                <h2 className="card-title">{bookName}</h2>
                <p className='pb-5 border-dashed border-b-2'>By: {author}</p>
            </div>
            <div className='flex justify-between mt-4'>
                <p>{category}</p>
                <p className='flex' >{rating} <FaRegStar className='mt-1 ml-2'></FaRegStar> </p>
            </div>
            </button>
            </Link>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object,
    bookId: PropTypes.object,
};
export default Book