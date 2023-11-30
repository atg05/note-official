import { Route, Routes, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Editor from "../components/editor/Editor";
import Layout from "../layout/Layout";
import Notes from "../pages/all-notes/Notes";

const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Notes />,
      },
      {
        path: "/editor",
        element: <Editor />,
      },
    ],
  },
]);

export default routers;
