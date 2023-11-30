import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout/Layout.tsx";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routes.tsx";
import "./styles/index.css";
import EdtiorProvider from "./context/editorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EdtiorProvider>
      <RouterProvider router={routers} />
    </EdtiorProvider>
  </React.StrictMode>
);
