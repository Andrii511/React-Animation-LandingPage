import React, { useRef, useEffect, useState } from "react";
import { Field } from "formik";

export default function RadioButtons(props) {
  const { row, label, visible, name, conditional, options, required, ...rest } =
    props;
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
      className="flex flex-col overflow-hidden "
    >
      <label className={`inline-block uppercase pb-2`}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <div className={`flex ${row ? " items-center " : "flex-col"}`}>
        {options.map((option) => {
          return (
            <label
              className={`flex items-center  uppercase cursor-pointer ${
                row ? "mr-6" : "mb-2.5"
              }`}
              key={option.key}
            >
              <Field
                className="DAOA__radio cursor-pointer"
                name={name}
                {...rest}
                value={option.value}
                checked={
                  Array.isArray(rest.value)
                    ? rest.value.some((val) => val === option.value)
                    : rest.value === option.value
                }
              />
              <span
                className={`ml-2 ${
                  row ? "uppercase" : "capitalize font-manrope"
                }`}
              >
                {option.key}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
