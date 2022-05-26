import React from "react";
import "../styles/Button.scss";

export default function Socials({ size = "reg" }) {
  const sizes = {
    reg: "w-3 h-3 lg:h-6 lg:w-6",
    big: "w-10 h-10",
  };
  return (
    <div className="flex items-center justify-center gap-2.5 ">
      <a
        className="lg:p-2 p-1 border border-white"
        href="https://discord.gg/XUfkfmNy33"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className={`block ${sizes[size]} `}
          src="assets/discord.svg"
          alt="join discord"
        />
      </a>
      <a
        className="lg:p-2 p-1 border border-white"
        href="https://www.instagram.com/otakuoriginsnft/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className={`block ${sizes[size]} `}
          src="/assets/insta.svg"
          alt="join instagram"
        />
      </a>
      <a
        className="lg:p-2 p-1 border border-white "
        href="https://twitter.com/otakuoriginsnft"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className={`block ${sizes[size]} `}
          src="/assets/twitter.svg"
          alt="join twitter"
        />
      </a>
    </div>
  );
}
