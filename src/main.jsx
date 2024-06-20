import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root';
import ErrorPage from './ErrorPage';
import Home from './component/Home';
import BooksDetails from './component/BooksDetails';
import ListedBooks from './component/ListedBooks';
import ReadingPage from './component/ReadingPage';
import AboutUs from './component/AboutUs';
import Contacts from './component/Contacts';
import ReadBooks from './component/ReadBooks';
import WishListBooks from './component/WishListBooks';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/book/:bookId',
        element:<BooksDetails></BooksDetails>,
        loader: () => fetch ('/books.json')
      },
      {
        path:'/readBooks/:bookId',
        element:<ReadBooks></ReadBooks>,
        loader: () => fetch ('/books.json')
      },
      {
        path:'/wishListedBooks/:bookId',
        element:<WishListBooks></WishListBooks>,
        loader: () => fetch ('/books.json')
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/readingPage',
        element:<ReadingPage></ReadingPage>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/contacts',
        element:<Contacts></Contacts>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
