import React, { useEffect, useState } from "react";
import { StoreContext } from "../../contexts/ComicsVerification/context";
import { Link } from "react-router-dom";
import Select from "react-select";
import LoadingIcon from "../LoadingIcon";
import "../../styles/Button.scss";
import "../../styles/AllComicsList.scss";
import dayjs from "dayjs";
import { useWallet } from "@solana/wallet-adapter-react";
import api from "../../api/api";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];
const customSelectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "red" : "#8e8e8e",
    textAlign: "left",
    backgroundColor: "black",
    fontFamily: `"Squada One", sans-serif`,
    maxWidth: "200px",
    minWidth: "150px",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: "flex",
    border: "none",
    textAlign: "left",
    fontSize: "17px",
    fontWeight: "bold",
    fontFamily: `"Squada One", sans-serif`,
    maxWidth: "200px",
    minWidth: "150px",
    color: "rgba(255, 255, 255, 0.6)",
    backgroundColor: "rgb(255, 255, 255, 0.102)",
    borderRadius: "20px",
    padding: "3px 10px",
  }),
  menu: () => ({
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    zIndex: "1000",
    maxWidth: "200px",
    minWidth: "150px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition, color: "white" };
  },
};
const AllComics = ({
  isMyComics,
  setCurrentLocation,
  setCurrentComicDetailUID,
}) => {
  const [list, setList] = useState([]);
  const [sortValue, setSortValue] = useState("newest");
  const wallet = useWallet();
  const {
    state: { comicVerificationList },
  } = React.useContext(StoreContext);

  useEffect(() => {
    const getAllComics = async () => {
      const result = await api
        .get({
          endpoint: "/comics",
        })
        .then((response) => response.data);
      setList(result);
    };
    getAllComics();
  }, []);

  const handleSortChanged = (newValue) => {
    setSortValue(newValue.value);
  };

  const handleSortBy = (a, b) => {
    if (
      new Date(a.first_publication_date).getTime() >
      new Date(b.first_publication_date).getTime()
    )
      return sortValue === "newest" ? -1 : 1;
    else return sortValue === "newest" ? 1 : -1;
  };

  const findMyComics = (comic) => {
    return comicVerificationList[comic.uid];
  };

  if (!list) return <LoadingIcon></LoadingIcon>;

  const comicList = isMyComics
    ? list
        .filter((comic) => findMyComics(comic))
        .sort((a, b) => handleSortBy(a, b))
    : list.sort((a, b) => handleSortBy(a, b));

  return (
    <div className="all-comics-list font-squada min-h-screen text-white bg-black h-full flex flex-col">
      <div className="all-comics-list__header">
        <h1 className="all-comics-list__title">
          {isMyComics ? "My Comics" : "All Comics"}
        </h1>
        <Select
          className="gallery__select"
          defaultValue={sortOptions[0]}
          name="sort"
          options={sortOptions}
          styles={customSelectStyles}
          onChange={handleSortChanged}
        />
      </div>
      {(comicList && comicList.length === 0) ||
        (!wallet.connected && (
          <div className="no-comics mx-auto mt-7 flex flex-col text-center items-center">
            <p className="text-xl font-manrope">
              You do not have any comics :( to gain access to our awesome comics
              head to Magin Eden today! Our Otaku NFT will give you access to
              all comics.
            </p>
            <div className="no-comics-button mt-5">
              <a
                href="https://magiceden.io/creators/otakuorigins"
                className="button-link"
                target="_blank"
                rel="noreferrer"
              >
                <button className="Button">
                  <p className="join">join us</p>
                  <div className="bg-red-700 w-4/5 up h-1/2"></div>
                  <div className="bg-red-500 w-4/5 down h-1/2"></div>
                </button>
              </a>
            </div>
          </div>
        ))}
      <div className="chapter-list-wrapper">
        {wallet.connected &&
          comicList.map((item) => {
            return (
              <div key={item.uid} className="all-comics-list__comic">
                <div className="all-comics-list__comic--cover">
                  <img src={item.data.cover.url} />
                  <div
                    className="view-detail uppercase"
                    onClick={() => {
                      setCurrentComicDetailUID(item.uid);
                      setCurrentLocation("/comic-detail");
                    }}
                  >
                    View Details
                  </div>
                </div>
                <div className="all-comics-list__details">
                  <h3>{item.data.title}</h3>
                  <div className="all-comics-list__details__date">
                    {new dayjs(
                      item.data.publish_date || item.first_publication_date
                    ).format("MM/DD/YYYY")}
                  </div>
                </div>
                <Link
                  className="button-secondary"
                  to={{
                    pathname: "/comic",
                    search: `?action=view&comic=${item.uid}`,
                  }}
                >
                  Read Now
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllComics;
