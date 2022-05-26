import React from "react";
import "../styles/Button.scss";
export default function Button() {
  return (
    <a href="https://discord.gg/XUfkfmNy33" className="joinUsButton">
      <button className="Button">
        <p className="join">join us</p>
        <div className="bg-red-700 w-4/5 up h-1/2"></div>
        <div className="bg-red-500 w-4/5 down h-1/2"></div>
      </button>
    </a>
  );
}
