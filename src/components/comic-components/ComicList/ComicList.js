import React from "react";
import { Link } from "react-router-dom";
import "./ComicList.scss";
import "../../../styles/Button.scss";
import { StoreContext } from "../../../contexts/ComicsVerification/context";
import { useWallet } from "@solana/wallet-adapter-react";
import dayjs from "dayjs";

const ComicList = ({
  list,
  title,
  setCurrentComicDetailUID,
  setCurrentLocation,
}) => {
  const wallet = useWallet();
  const {
    state: { comicVerificationList, isVerified },
  } = React.useContext(StoreContext);
  const isUserVerified = isVerified && wallet.connected;
  return (
    <div className="comic-list">
      <div className="comic-list__header">
        <h2>{title}</h2>
        <img className="comic-list__arrow" src="arrow.png" />
      </div>
      <div className="chapter-list-wrapper">
        {list.map((item, i) => {
          return (
            <div key={i} className="comic-list__comic md:w-1/2">
              <div className="comic-list__comic--cover">
                <img src={item.cover.url} />
                {setCurrentComicDetailUID && (
                  <div
                    className="view-detail uppercase"
                    onClick={() => {
                      if (setCurrentComicDetailUID) {
                        setCurrentComicDetailUID(item.comic1.uid);
                        setCurrentLocation("/comic-detail");
                      }
                    }}
                  >
                    View Details
                  </div>
                )}
              </div>
              <div className="comic-list__details">
                <h3>{item.title1}</h3>
                <div className="comic-list__details__date">
                  {new dayjs(
                    item.publish_date || item.first_publication_date
                  ).format("MM/DD/YYYY")}
                </div>
              </div>
              <Link
                className="button-secondary"
                to={{
                  pathname: "/comic",
                  search: `?action=${
                    isUserVerified ? "view" : "preview"
                  }&comic=${item.comic1?.uid}`,
                }}
              >
                {isUserVerified ? "Read More" : "Preview"}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicList;
