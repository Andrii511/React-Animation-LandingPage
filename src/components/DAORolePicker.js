import React, { useState, useEffect, useRef } from "react";
const DAOA = "DAOA";
export default function DAORolePicker({ handlePickApplicantRole, showForm }) {
  const pickBox = useRef(null);
  const [pickBoxHeight, setPickBoxHeight] = useState(0);
  useEffect(() => {
    const currentBoxHeight = pickBox && pickBox.current.scrollHeight;

    if (pickBox) {
      setPickBoxHeight(currentBoxHeight + 16);
    }
    if (pickBox && showForm) {
      setPickBoxHeight(0);
    }
  }, [showForm]);
  return (
    <div
      style={{
        maxHeight: pickBoxHeight,
        transition: "all 0.3s 0.4s",
        pointerEvents: showForm ? "none" : "auto",
      }}
      ref={pickBox}
      className={`${DAOA}__applicants-types`}
    >
      <div
        value="artist"
        onClick={handlePickApplicantRole}
        className={`${DAOA}__applicant-type-box ${
          showForm ? "opacity-0" : "opacity-100"
        } `}
      >
        <div className="applicant-type-pic">
          <img
            className="absolute w-full h-full object-cover"
            src="/assets/pincel.jpeg"
            alt="artist"
          />
        </div>
        <p className="applicant-type">i&apos;m an artist</p>
      </div>
      <div
        value="author"
        onClick={handlePickApplicantRole}
        className={`${DAOA}__applicant-type-box ${
          showForm ? "opacity-0" : "opacity-100"
        } `}
      >
        <div className="applicant-type-pic">
          {" "}
          <img
            className="absolute w-full h-full object-cover"
            src="/assets/pluma.jpeg"
            alt="author"
          />
        </div>
        <p className="applicant-type">i&apos;m an Author</p>
      </div>
    </div>
  );
}
