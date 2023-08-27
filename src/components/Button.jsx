import React from "react";

import "./Button.css";

const Button = ({ children, onCLick }) => {
  return (
    <button onClick={onCLick} className="button">
      {children}
    </button>
  );
};

export default Button;
