import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Alm from "./routes/alm";
import GitBasedItems from "./routes/git-based-items";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/alm",
        element: <Alm />,
    },
    {
        path: "/git-based-items",
        element: <GitBasedItems />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
