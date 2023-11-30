import { useNavigate } from "react-router-dom";
import Button from "../common/Button/Button";
import PlusIcon from "../../assets/svg/plus_icon.svg?react";

import "./Header.style.css";

const Header = () => {
  const navigate = useNavigate();

  const handleNewButtonClick = () => {
    navigate("/editor");
  };

  return (
    <div className="header-container">
      <p className="title">Notes</p>
      <Button onClick={handleNewButtonClick}>
        <PlusIcon className="icon_header" />
        New
      </Button>
    </div>
  );
};

export default Header;
