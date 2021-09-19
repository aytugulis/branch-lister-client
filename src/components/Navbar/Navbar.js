import React, { useState } from "react";
import {
  Nav,
  EyeIcon,
  ClosedEyeIcon,
  HamburgerMenu,
  List,
  ListItem,
  BrandLink,
} from "./stylesNavbar";
import { Line } from "../../styles/mainStyles";
import NavList from "./subComponents/NavList";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerToggle = () => setHamburger(!hamburger);

  return (
    <>
      <Nav>
        <List listType="brandList">
          <ListItem>
            <BrandLink to="/">Branch Lister</BrandLink>
          </ListItem>
        </List>

        <NavList listType="mainList" />

        {!hamburger && <EyeIcon size="1.7rem" onClick={hamburgerToggle} />}

        {hamburger && (
          <HamburgerMenu>
            <ClosedEyeIcon size="1.7rem" onClick={hamburgerToggle} />
            <Line />
            <NavList listType="hamburgerList" />
          </HamburgerMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
