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
        path:'/booksDetails',
        element:<BooksDetails></BooksDetails>
      },
      {
        path:'/listedbooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/readingpage',
        element:<ReadingPage></ReadingPage>
      },
      {
        path:'/aboutus',
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
