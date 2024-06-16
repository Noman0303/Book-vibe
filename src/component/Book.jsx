import PropTypes from 'prop-types';
const Book = ({book}) => {

    const {bookId} = book;

  return (
    <div className="border-2 ">
        <p>{bookId}</p>

    </div>
  )
}

Book.propTypes = {
    book: PropTypes.object,
    bookId : PropTypes.object,};
export default Book