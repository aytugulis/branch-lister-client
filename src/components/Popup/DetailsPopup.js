import React from "react";
import { Button } from "../../styles/mainStyles";
import { PopupBackground, PopupContainer, PopupText } from "./stylesPopup";

const DetailsPopup = ({ popupToggleHandler, branch }) => {
  return (
    <>
      <PopupBackground>
        <PopupContainer>
          <PopupText>Branch Id: {branch._id}</PopupText>
          <PopupText>Name: {branch.name}</PopupText>
          <PopupText>Phone: {branch.phone}</PopupText>
          <PopupText>Latitude: {branch.latitude}</PopupText>
          <PopupText>Longitude: {branch.longitude}</PopupText>
          <PopupText>Full Address: {branch.full_address}</PopupText>
          <Button color="primary" onClick={popupToggleHandler}>
            Close
          </Button>
        </PopupContainer>
      </PopupBackground>
    </>
  );
};

export default DetailsPopup;
