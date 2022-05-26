import React, { useState } from "react";
import "../styles/Comics.scss";
import "../styles/Button.scss";
import "../styles/JoinUs.scss";

import ConnectButton from "../components/comic-components/ConnectButton";
import ComicsSubNav from "../components/comic-components/ComicsSubNav/ComicsSubNav";
import ComicHome from "../components/comic-components/ComicHome";
import AllComics from "../components/comic-components/AllComics";
import ComicDetail from "../components/comic-components/ComicDetail";

const Comics = ({ connection }) => {
  const [currentLocation, setCurrentLocation] = useState("/");
  const [currentComicDetailUID, setCurrentComicDetailUID] = useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLocation]);

  const allComics = (
    <AllComics
      isMyComics={currentLocation === "/my-comics"}
      setCurrentLocation={setCurrentLocation}
      setCurrentComicDetailUID={setCurrentComicDetailUID}
    />
  );

  const getComponent = () => {
    switch (currentLocation) {
      case "/":
        return (
          <ComicHome
            setCurrentLocation={setCurrentLocation}
            setCurrentComicDetailUID={setCurrentComicDetailUID}
          />
        );
      case "/my-comics":
        return allComics;
      case "/all-comics":
        return allComics;
      case "/comic-detail":
        return <ComicDetail comicUID={currentComicDetailUID} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="comics DAOA font-squada min-h-screen text-white bg-black h-full flex flex-col py-20">
      <div
        className="absolute h-full w-full bg-center"
        style={{ backgroundImage: "url(background.png)", zIndex: "-1" }}
      ></div>
      <div className="header-wrapper">
        <div className="sub-nav">
          <ComicsSubNav
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
          />
        </div>
        <ConnectButton connection={connection} />
      </div>
      {getComponent()}
    </div>
  );
};

export default Comics;
