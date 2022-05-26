import React from "react";

export default function TextArea({ label, visible, name, ...props }) {
  return (
    <div className="flex flex-col">
      <label className="uppercase pb-2" htmlFor={name}>
        {label}
      </label>
      <textarea className="DAOA__text-area font-manrope" {...props}></textarea>
    </div>
  );
}
