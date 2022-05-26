import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "react-router-dom";
import { StoreContext } from "../../contexts/ComicsVerification/context";

import "../../styles/Comics.scss";
import "../../styles/Button.scss";
import "../../styles/JoinUs.scss";
import { getSlice } from "../../utils/getSlice";
import AllChapterList from "./ChapterList/AllChapterList";
import LoadingIcon from "../LoadingIcon";
import { useWallet } from "@solana/wallet-adapter-react";
import dayjs from "dayjs";
import api from "../../api/api";

const ComicHome = ({ setCurrentLocation, setCurrentComicDetailUID }) => {
  const [page, setPage] = useState();
  const wallet = useWallet();
  const {
    state: { comicVerificationList, isVerified },
  } = React.useContext(StoreContext);

  useEffect(() => {
    const getHomePageData = async () => {
      const result = await api
        .get({
          endpoint: "/single/comics_homepage",
        })
        .then((response) => response.data.data);
      setPage(result);
    };
    getHomePageData();
  }, []);

  const isUserVerified =
    (comicVerificationList[page?.comic?.uid] || isVerified) && wallet.connected;

  if (!page) return <LoadingIcon></LoadingIcon>;

  return (
    <div className="page-wrapper">
      <div>
        <div className="comics__section1">
          <div className="content">
            <div className="main-section">
              <div
                className="main-image cursor-pointer"
                onClick={() => {
                  setCurrentComicDetailUID(page.comic.uid);
                  setCurrentLocation("/comic-detail");
                }}
              >
                <img src={page.main_image.url} />
              </div>
              <div className="main-section__description">
                <h2>{page.title}</h2>
                <div className="description">
                  <RichText render={page.description} />
                </div>

                <div className="chapters w-5/6">
                  <div className="chapter">
                    <div className="chapter-header-wrapper">
                      <h3 className="chapter-header">
                        {page.featured_comic_title}
                      </h3>
                      <div className="release-date">
                        {new dayjs(page.comic.first_publication_date).format(
                          "MM/DD/YYYY"
                        )}
                      </div>
                    </div>

                    <div>
                      <img
                        className="w-full lg:w-48"
                        src={page.featured_image.url}
                      />
                    </div>
                    <div className="comic-button">
                      <Link
                        to={{
                          pathname: "/comic",
                          search: `?action=${
                            isUserVerified ? "view" : "preview"
                          }&comic=otaku-origins&chapter=otaku-chapter-1`,
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-chapters-wrapper">
          <div
            className="content"
            style={{ backgroundImage: "url(comics-bg.png)" }}
          >
            <div>{<AllChapterList />}</div>
          </div>
        </div>

        <div className="all-chapters-wrapper">
          <div
            className="content"
            style={{ backgroundImage: "url(comics-bg-2.png)" }}
          >
            {page.body.map((slice) => {
              return getSlice(
                slice,
                setCurrentLocation,
                setCurrentComicDetailUID
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicHome;
