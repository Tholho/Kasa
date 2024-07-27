import React from 'react';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Accomodation from "./components/Accomodation"
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/Kasa/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        path: "/Kasa/",
        element: <Home />,
      },
      {
        path: "/Kasa/about",
        element: <About />,
      },
      {
        path: "/Kasa/accomodation/:id",
        element: <Accomodation />
      },
      {
        path: "/Kasa/*",
        element: <ErrorPage />
      },
    ],
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;