import { useEffect, useState } from "react"
import Book from "./Book";

const BooksSection = () => {

  const [books,setBooks] = useState([])

  useEffect ( () => {
    fetch('books.json')
    .then(res => res.json())
    .then(data=> setBooks(data));

  },[])


  return (
    <div className="mt-24"> 
      <h2 className="font-bold text-4xl text-center">Books : {books.length} </h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {
          books.map(book=> <Book key={book.id} book={book} ></Book> )
        }
      

      </div>
    </div>
  )
}

export default BooksSection