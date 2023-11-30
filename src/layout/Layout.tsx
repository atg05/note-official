import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import "./Layout.styles.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
