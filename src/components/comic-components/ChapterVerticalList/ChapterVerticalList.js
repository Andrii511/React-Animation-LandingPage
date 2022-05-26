import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "react-router-dom";
import "./ChapterVerticalList.scss";
import "../../../styles/Button.scss";
import { StoreContext } from "../../../contexts/ComicsVerification/context";
import dayjs from "dayjs";
import { useWallet } from "@solana/wallet-adapter-react";

const ChapterVerticalList = ({ chapterList, isUserVerified, comicUID }) => {
  const {
    state: { nfts },
  } = React.useContext(StoreContext);
  const wallet = useWallet();
  return (
    <div
      className="chapter-vertical-list lg:w-5/6 mx-auto"
      style={{ backgroundImage: "url(chapter-list-background-img.png)" }}
    >
      <div className="title pb-2 border-b border-white">CHAPTER LIST</div>
      <div className="chapter-containter">
        {chapterList?.map((chapter, idx) => {
          return (
            <div key={idx}>
              <div className="chapter">
                <img
                  id={`chapter-${idx}`}
                  src={chapter?.cover1?.url}
                  key={idx}
                  alt={idx}
                  className="w-1/2 lg:w-1/4"
                />
                <div className="chapter-info w-1/2 lg:w-full">
                  <div className="title-wrapper">
                    <div className="title">{chapter?.chapter_title} </div>
                    <div className="release-date">
                      {new dayjs(
                        chapter.publish_date1 ||
                          chapter.chapter.first_publication_date
                      ).format("MM/DD/YYYY")}
                    </div>
                  </div>
                  <div className="description">
                    <RichText render={chapter?.description} />
                  </div>
                  <div className="flex w-full gap-7">
                    <div className="comic-button">
                      <Link
                        to={{
                          pathname: "/comic",
                          search: `?action=${
                            isUserVerified ? "view" : "preview"
                          }&comic=${comicUID}&chapter=${chapter?.chapter?.uid}`,
                        }}
                      >
                        <button className="Button">
                          <div className="join read-button">
                            {isUserVerified ? "Read Now" : "Preview"}
                          </div>
                          <div className="bg-red-700 w-4/5 up h-1/2"></div>
                          <div className="bg-red-500 w-4/5 down h-1/2"></div>
                        </button>
                      </Link>
                    </div>
                    {chapter.isBtsVerified && wallet.connected && (
                      <div className="comic-button">
                        <Link
                          to={{
                            pathname: "/comic",
                            search: `?action=view&chapter=${chapter?.chapter?.uid}&bts=sketches`,
                          }}
                        >
                          <button className="Button">
                            <div className="join read-button">
                              Behind the Scenes
                            </div>
                            <div className="bg-red-700 w-4/5 up h-1/2"></div>
                            <div className="bg-red-500 w-4/5 down h-1/2"></div>
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <img src="divider-light.png" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterVerticalList;
