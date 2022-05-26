import React from "react";
const DAOA = "DAOA";
export default function DAOFormHeader({ applicant }) {
  const headings = [
    { role: "author", text: `i'm an author` },
    {
      role: "",
      text: "Apply for our launchpad to start your very own comic series",
    },
    {
      role: "submit",
      text: "Your submission will be reviewed by our team and we will contact you ",
    },
    { role: "artist", text: `i'm an artist` },
  ];
  return (
    <div className="DAOA__form-header flex flex-col items-center ">
      {" "}
      <img className="h-40 mb-5 " src="/assets/logo.svg" alt="logo" />
      <h3 className={`${DAOA}__main-title`}>
        {applicant === "submit" ? "Thank you" : "Join the otakuverse"}
      </h3>
      <div className={`${DAOA}__subtitle`}>
        {headings.map((h, i) => (
          <div
            key={i}
            className={`${
              applicant !== "submit" ? "font-squada uppercase" : ""
            }  subheading ${applicant === h.role ? "isVisible" : ""}`}
          >
            {h.text}
          </div>
        ))}
      </div>
    </div>
  );
}
