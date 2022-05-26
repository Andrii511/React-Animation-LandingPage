import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ChapterList.scss";
import "../../../styles/Button.scss";
import { StoreContext } from "../../../contexts/ComicsVerification/context";
import api from "../../../api/api";
import { useWallet } from "@solana/wallet-adapter-react";
import dayjs from "dayjs";

const AllChapterList = () => {
  const wallet = useWallet();
  const title = "Newly Released Chapters";
  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    const getPages = async () => {
      const result = await api
        .get({
          endpoint: "/chapters/noauth",
        })
        .then((response) => response.data);
      setChapters(result);
    };
    getPages();
  }, []);
  const {
    state: { comicVerificationList, isVerified },
  } = React.useContext(StoreContext);

  const list = chapters;
  if (!list) return <></>;
  return (
    <div className="chapter-list">
      <div className="chapter-list__header">
        <h2>{title}</h2>
        <img className="chapter-list__arrow" src="arrow.png" height="20px" />
      </div>
      <div className="chapter-list-wrapper">
        {list.slice(0, 6).map((item, i) => {
          const isUserVerified =
            (comicVerificationList[item?.data?.related_comic?.uid] ||
              isVerified) &&
            wallet.connected;

          return (
            <div key={i} className="chapter-list__comic">
              <div className="chapter-list__comic--cover">
                <img src={item.data.cover.url} />
              </div>
              <div className="chapter-list__details">
                <h3>{item.data.title}</h3>
                <div className="chapter-list__details__date">
                  {new dayjs(
                    item.data.publish_date || item.first_publication_date
                  ).format("MM/DD/YYYY")}
                </div>
              </div>
              <Link
                className="button-secondary"
                to={{
                  pathname: "/comic",
                  search: `?action=${
                    isUserVerified ? "view" : "preview"
                  }&comic=${item.data.related_comic.uid}&chapter=${item.uid}`,
                }}
              >
                {isUserVerified ? "Read Now" : "Preview"}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllChapterList;
