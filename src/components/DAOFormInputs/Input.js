import React, { useState, useRef, useEffect } from "react";

export default function Input({
  inputStyle,
  withIcon,
  label = "",
  visible = false,
  conditional,
  required = false,
  ...props
}) {
  const { name } = props;
  const icons = {
    instagram: "/assets/insta.svg",
    discord: "/assets/discord.svg",
    twitter: "/assets/twitter.svg",
    other: "/assets/at-icon.svg",
  };
  const box = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (box) {
      const boxHeight = box.current.scrollHeight;
      visible && name === conditional ? setHeight(boxHeight) : setHeight(0);
    }
  }, [box, visible, name, conditional]);
  return (
    <div
      style={
        name === conditional
          ? {
              display: visible ? "block" : "none",
              maxHeight: height,
              transition: "all 0.3s",
            }
          : {}
      }
      ref={box}
      key={props.id}
      className="DAOA__input flex flex-col overflow-hidden"
    >
      <label className="font-squada pb-2 inline-block" htmlFor={name}>
        {label
          .split(" ")
          .map((item) =>
            item === "@" ? <span className="font-manrope">@</span> : item + " "
          )}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`input-wrapper ${withIcon ? "with-icon" : ""}`}>
        {withIcon && (
          <div className="icon-wrapper h-full">
            {name !== "other" ? (
              <img className="w-4 h-4" src={icons[name]} alt={name} />
            ) : (
              <span className="text-white font-manrope">@</span>
            )}
            <div className="devider"></div>
          </div>
        )}
        <input placeholder="Type in your name" {...props} />
      </div>
    </div>
  );
}
