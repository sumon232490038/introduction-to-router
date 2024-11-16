import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";
import Contract from "./component/Contracts/Contract";
import Service from "./component/Service/Service";
import Home from "./component/Home/Home";
import App from "./App.jsx";
import UserDetails from "./component/UserDetails/UserDetails.jsx";
import Posts from "./component/Posts/Posts.jsx";
import PostDetails from "./component/PostDetails/PostDetails.jsx";
import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contract",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Contract></Contract>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
