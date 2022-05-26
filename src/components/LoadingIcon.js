import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export default function LoadingIcon() {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className="comic-reader__wallet min-h-screen h-full">
      <ClipLoader color="white" loading={true} css={override} size={150} />
    </div>
  );
}
