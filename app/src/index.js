import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRouter } from "@remix-run/router";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Register from "./pages/Register"
import PostDetail from "./pages/PostDetail"
import Profile from "./pages/Profile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Forum />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: '/login',
    element: <Login />
  }, 
  {
    path: '/register',
    element: <Register />
  }, 
  {
    path: '/post/:id',
    element: <PostDetail/>
  }, 
  {
    path: '/profile',
    element: <Profile/>
  }, 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
