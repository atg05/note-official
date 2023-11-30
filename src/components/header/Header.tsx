import { useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button/Button";
import PlusIcon from "../../assets/svg/plus_icon.svg?react";
import BackIcon from "../../assets/svg/back_icon.svg?react";

import "./Header.style.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNewButtonClick = () => {
    navigate("/editor");
  };

  return (
    <div className="header-container">
      {location.pathname === "/editor" ? (
        <BackIcon className="back_icon" />
      ) : (
        <p className="title">Notes</p>
      )}
      {location.pathname === "/editor" ? (
        <Button onClick={handleNewButtonClick}>Save</Button>
      ) : (
        <Button onClick={handleNewButtonClick}>
          <PlusIcon className="icon_header" />
          New
        </Button>
      )}
    </div>
  );
};

export default Header;
