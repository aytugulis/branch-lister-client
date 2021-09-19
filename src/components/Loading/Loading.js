import React from "react";
import { Spinner, SpinnerContainer } from "./loadingStyles";

const Loading = () => {
  return (
    <>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </>
  );
};

export default Loading;
