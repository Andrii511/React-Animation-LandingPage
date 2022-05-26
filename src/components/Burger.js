import React from "react";

export default function Burger({ show }) {
  return (
    <>
      <div
        className={`${
          show ? "opacity-0" : "opacity-100"
        } transition-all w-full h-0.5   relative`}
      >
        <div className={`bg-white w-full h-full absolute top-0 left-0`}></div>
        <div className={`bg-white w-full h-full absolute top-0 left-0`}></div>
      </div>
      <div className={` w-full h-0.5  relative`}>
        <div
          className={`bg-white w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 transition-all transform ${
            show ? "rotate-45" : "rotate-0"
          }`}
        ></div>
        <div
          style={{
            transform: show
              ? `translateX(-50%) translateY(-50%) rotate(-45deg)`
              : `translateX(-50%) translateY(-50%) rotate(-0deg)`,
          }}
          className={`bg-white w-full h-full absolute top-1/2 left-1/2   transition-all transform `}
        ></div>
      </div>
      <div
        className={`${
          show ? "" : "bg-white"
        } transition-all w-full h-0.5  relative`}
      ></div>
    </>
  );
}
