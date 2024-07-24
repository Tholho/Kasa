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
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "accomodation/:id",
        element: <Accomodation />
      },
      {
        path: "*",
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