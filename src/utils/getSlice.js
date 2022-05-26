import React from "react";
import ComicList from "../components/comic-components/ComicList/ComicList";

export const getSlice = (
  slice,
  setCurrentLocation,
  setCurrentComicDetailUID
) => {
  switch (slice.slice_type) {
    case "comic_list":
      return (
        <ComicList
          list={slice?.items}
          title={slice?.primary?.title1}
          setCurrentLocation={setCurrentLocation}
          setCurrentComicDetailUID={setCurrentComicDetailUID}
        />
      );
    default:
      return <></>;
  }
};
