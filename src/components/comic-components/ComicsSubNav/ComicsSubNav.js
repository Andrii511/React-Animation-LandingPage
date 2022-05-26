import React from "react";
import "./ComicsSubNav.scss";

const ComicsSubNav = ({ currentLocation, setCurrentLocation }) => {
  return (
    <div className="comic-sub-nav">
      <div className="sub-link" onClick={() => setCurrentLocation("/")}>
        HOME
      </div>
      {/* <div
        className="sub-link"
        onClick={() => setCurrentLocation("/all-comics")}
      >
        VIEW ALL COMICS
      </div> */}
      <div
        className="sub-link"
        onClick={() => setCurrentLocation("/my-comics")}
      >
        MY COMICS
      </div>
    </div>
  );
};

export default ComicsSubNav;
