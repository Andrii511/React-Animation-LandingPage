import React, { useEffect } from "react";
import { hideHeader, showHeader, onComicClick } from "../utils/util";
import { onKeyDown, onScroll } from "../utils/ComicScroll";
import Background from "./Background";
import Header from "./ReaderHeader";
import Footer from "./ReaderFooter";
import "../../../../styles/ComicReader.scss";

export default function Reader({
  selectedOption,
  chapterList,
  setChapter,
  reader,
  action,
}) {
  var isScrolling;
  const [pageNumber, setPageNumber] = React.useState(1);
  const [buttonsVisible, setButtonsVisible] = React.useState(true);
  const length = reader?.pages?.length || 0;
  // hide global header
  useEffect(() => {
    hideHeader();
    return function cleanup() {
      showHeader();
    };
  }, []);

  // event listeners for arrow keys & scrolling
  useEffect(() => {
    window.addEventListener("keydown", (e) => onKeyDown(e, pageNumber, length));
    window.addEventListener(
      "scroll",
      (e) => onScroll(isScrolling, setPageNumber, length),
      false
    );

    return () => {
      window.removeEventListener("keydown", (e) =>
        onKeyDown(e, pageNumber, length)
      );
      window.removeEventListener(
        "scroll",
        (e) => onScroll(isScrolling, setPageNumber, length),
        false
      );
    };
  }, [pageNumber]);

  return (
    <div
      id="comic-reader"
      className="comic-reader"
      onClick={() => {
        onComicClick(buttonsVisible, setButtonsVisible);
      }}
    >
      <Background></Background>
      {buttonsVisible && selectedOption && (
        <Header
          chapterList={chapterList}
          selectedOption={selectedOption}
          setChapter={setChapter}
        ></Header>
      )}
      <div
        id="comic-img-container"
        className="cont flex-col flex-grow items-center"
      >
        {reader?.pages?.map((url, idx) => (
          <img
            id={`img-${idx}`}
            src={url}
            key={url}
            alt={idx}
            className="comic-reader__ img"
          />
        ))}
      </div>
      {buttonsVisible && length && (
        <Footer
          action={action}
          pageNumber={pageNumber}
          length={length}
        ></Footer>
      )}
    </div>
  );
}
