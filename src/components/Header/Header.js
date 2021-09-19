import React from "react";
import { HeadContainer, HeadLine, HeadTitle } from "./stylesHeader";

const Header = ({ title }) => {
  return (
    <>
      <HeadContainer>
        <HeadTitle>{title}</HeadTitle>
        <HeadLine />
      </HeadContainer>
    </>
  );
};

export default Header;
