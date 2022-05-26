export const ActionType = {
  SET_IS_VERIFIED: 0,
  SET_COMIC_VERIFICATION_LIST: 1,
  SET_CHAPTER_VERIFICATION_LIST: 2,
  SET_NFT_LIST: 3,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_IS_VERIFIED:
      return {
        ...state,
        isVerified: action.payload.isVerified,
      };
    case ActionType.SET_COMIC_VERIFICATION_LIST:
      return {
        ...state,
        comicVerificationList: action.payload.comicVerificationList,
      };
    case ActionType.SET_CHAPTER_VERIFICATION_LIST:
      return {
        ...state,
        chapterVerificationList: action.payload.chapterVerificationList,
      };
    case ActionType.SET_NFT_LIST:
      return {
        ...state,
        nfts: action.payload.nfts,
      };
    default:
      return state;
  }
};
