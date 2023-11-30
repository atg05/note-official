import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout/Layout.tsx";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routes.tsx";
// import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
