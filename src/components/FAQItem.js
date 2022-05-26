import React, { useState, useRef } from "react";

export default function FAQItem({ qst, answr }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight + 16}px`
    );
  }
  return (
    <div
      onClick={toggleAccordion}
      className={`FAQ__questionWrapper ${setActive ? "enclosed" : ""}`}
    >
      <div className="question">
        <p> {qst}</p>{" "}
        <div className="plus-mark">
          <div className=" line horiz"></div>{" "}
          <div className={`line vert ${setActive ? "enclosed" : ""}`}></div>
        </div>
      </div>

      <p
        ref={content}
        style={{
          maxHeight: `${setHeight}`,
          transition: "all 0.5s",
        }}
        className={`answer ${setActive ? "enclosed" : ""}`}
      >
        {answr}
      </p>
    </div>
  );
}
