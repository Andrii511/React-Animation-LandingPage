import React from "react";
import "../../../../styles/ReaderHeader.scss";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Logo from "../../../Logo";

const customSelectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "red" : "#8e8e8e",
    textAlign: "left",
    backgroundColor: "black",
    fontFamily: `"Squada One", sans-serif`,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: "flex",
    border: "none",
    textAlign: "left",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    fontFamily: `"Squada One", sans-serif`,
  }),
  menu: () => ({
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    zIndex: "1000",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition, color: "white" };
  },
};

export default function Header({ chapterList, selectedOption, setChapter }) {
  const navigate = useNavigate();
  function goBack() {
    navigate("/comics");
  }

  return (
    <div className="comic-header">
      <button className="logo" onClick={goBack}>
        <Logo />
      </button>
      <div>
        <Select
          className="gallery__select"
          defaultValue={selectedOption}
          name="sort"
          options={chapterList}
          styles={customSelectStyles}
          onChange={(e) => setChapter(e)}
        />
      </div>
    </div>
  );
}
