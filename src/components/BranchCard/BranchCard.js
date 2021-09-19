import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardLine,
} from "./stylesBranchCard";
import { Button } from "../../styles/mainStyles";
import DetailsPopup from "../Popup/DetailsPopup";

const BranchCard = ({ branch }) => {
  const [popupToggle, setpopupToggle] = useState(false);

  const popupToggleHandler = () => {
    setpopupToggle(!popupToggle);
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardHeader>{branch.name}</CardHeader>
          <CardLine />
          <CardTitle>{branch.phone}</CardTitle>
          <Button color="colorless" onClick={popupToggleHandler}>
            Details
          </Button>
        </CardBody>
        {popupToggle && (
          <DetailsPopup
            branch={branch}
            popupToggleHandler={popupToggleHandler}
          />
        )}
      </Card>
    </>
  );
};

export default BranchCard;
