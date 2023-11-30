import React, { ReactNode } from "react";
import "./Button.style.css";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
