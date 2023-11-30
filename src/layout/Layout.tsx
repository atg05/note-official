import React from "react";
import Header from "../components/header/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Editor from "../components/editor/Editor";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layouts>
        <App />
      </Layouts>
    ),
  },
  { path: "/editor", element: <Editor /> },
]);

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
