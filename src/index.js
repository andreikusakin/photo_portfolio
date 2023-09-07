import React from "react";
import ReactDOM from "react-dom/client";
 import "./index.css";
import App from "./App";
import ErrorPage from "./components/errorPage/ErrorPage";
import Wedding from "./components/wedding/Wedding";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Travel from "./components/travel/Travel";
import Gallery from "./components/gallery/Gallery";
import Portrait from "./components/portrait/Portrait";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/wedding",
        element: <Wedding />,
        children: [
          {
            path: ":id",
            element: <Gallery />,
            
          },
        ],
      },
      {
        path: "/portrait",
        element: <Portrait />,
        children: [
          {
            path: ":id",
            element: <Gallery />,
            
          },
        ],
      },
      {
        path: "/travel",
        element: <Travel />,
        children: [
          {
            path: ":id",
            element: <Gallery />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

