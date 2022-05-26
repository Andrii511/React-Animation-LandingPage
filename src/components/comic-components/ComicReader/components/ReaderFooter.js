import React from "react";
import "../../../../styles/ReaderFooter.scss";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

export default function Footer({ action, pageNumber, length }) {
  const customButtonStyles = {
    backgroundColor: "rgba(0,0,0,.8)",
    fill: "white",
    borderRadius: "50%",
    padding: "5px",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="comic-footer">
      <ScrollUpButton style={customButtonStyles} />
      <div className="page-number">
        <div className="page-number__number">
          {pageNumber?.toString() || 1} / {length}
        </div>
        {action === "preview" && (
          <div className="view-type">** Preview Only **</div>
        )}
      </div>
    </div>
  );
}
