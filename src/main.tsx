import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.tsx'
import ErrorPage from "./routes/ErrorPage.tsx";
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>,
)
