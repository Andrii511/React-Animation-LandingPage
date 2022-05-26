import { ActionType } from "./reducer";

export const setIsVerified = (payload) => ({
  payload: payload,
  type: ActionType.SET_IS_VERIFIED,
});

export const setComicVerificationList = (payload) => ({
  payload: payload,
  type: ActionType.SET_COMIC_VERIFICATION_LIST,
});

export const setChapterVerificationList = (payload) => ({
  payload: payload,
  type: ActionType.SET_CHAPTER_VERIFICATION_LIST,
});

export const setNftList = (payload) => ({
  payload: payload,
  type: ActionType.SET_NFT_LIST,
});
