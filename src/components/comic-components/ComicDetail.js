import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "react-router-dom";
import { StoreContext } from "../../contexts/ComicsVerification/context";
import { getSlice } from "../../utils/getSlice";
import "../../styles/ComicDetail.scss";
import LoadingIcon from "../LoadingIcon";
import ChapterVerticalList from "./ChapterVerticalList/ChapterVerticalList";
import { useWallet } from "@solana/wallet-adapter-react";
import api from "../../api/api";

const ComicDetail = ({ comicUID }) => {
  // if uid not passed as prop, default to Otaku-Origins Series
  const wallet = useWallet();
  const comicID = comicUID || "otaku-origins";
  const [comic, setComic] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getComicByUid = async () => {
      try {
        setIsLoading(true);
        let url = `any/comic/${comicID}`;
        if (wallet?.connected && wallet?.publicKey) {
          url = `comic/${comicID}/auth/${wallet.publicKey.toBase58()}`;
        }
        const result = await api
          .get({
            endpoint: url,
          })
          .then((response) => response.data);
        setComic(result);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getComicByUid();
  }, []);

  const {
    state: { comicVerificationList, isVerified },
  } = React.useContext(StoreContext);

  const comicData = comic?.data;
  const isUserVerified =
    (comicVerificationList[comic?.uid] || isVerified) && wallet.connected;

  if (isLoading || !comicData) return <LoadingIcon></LoadingIcon>;
  return (
    <div className="page-wrapper">
      <div className="comic-detail font-squada min-h-screen text-white bg-black h-full flex flex-col">
        <div
          className="comic-detail__section1"
          // style={{ backgroundImage: "url(background-img.png)" }}
        >
          <div className="content">
            <div className="main-section lg:mb-20 relative">
              <div
                className="main-image"
                style={{ backgroundImage: `url(${comicData?.cover?.url})` }}
              ></div>
              <div className="main-section__description">
                <h1>COMIC DETAILS</h1>
                <h2>{comicData?.title}</h2>
                <div className="description">
                  <RichText render={comicData?.summary} />
                </div>
                <div className="comic-button">
                  <Link
                    to={{
                      pathname: "/comic",
                      search: `?action=${
                        isUserVerified ? "view" : "preview"
                      }&comic=${comic?.uid}&chapter=${
                        comicData?.chapters?.[0]?.chapter?.uid
                      }`,
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
                <img
                  className="animated-img absolute w-48 right-0 -bottom-20 hidden lg:block"
                  src="tv.gif"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {comic?.data.chapters && (
            <ChapterVerticalList
              chapterList={comicData?.chapters}
              isUserVerified={isUserVerified}
              comicUID={comic?.uid}
              chaptersList={comic?.data.chapters}
            ></ChapterVerticalList>
          )}
        </div>
        <div className="all-chapters-wrapper">
          <div
            className="content"
            style={{ backgroundImage: "url(comics-bg-2.png)" }}
          >
            {comicData?.body?.map((slice) => {
              return getSlice(slice);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicDetail;
