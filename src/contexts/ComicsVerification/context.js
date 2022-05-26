import React from "react";

export const initialState = {
  isVerified: undefined,
  comicVerificationList: {},
  chapterVerificationList: {},
  chapters: [],
  nfts: [],
};

export const StoreContext = React.createContext({
  state: initialState,
});
