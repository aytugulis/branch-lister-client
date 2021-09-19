import React, { useState } from "react";
import { Button } from "../../styles/mainStyles";
import EditPopup from "../Popup/EditPopup";

import {
  BranchTableContainer,
  BranchTableTr,
  BranchTableTh,
  BranchTableTd,
} from "./stylesBranchTable";

const BranchTable = ({ branches }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [branch, setBranch] = useState({});

  const editPopupToggle = (branch) => (e) => {
    e.preventDefault();
    setEditToggle(!editToggle);
    setBranch(branch);
  };

  const editPopupClose = (e) => {
    setEditToggle(false);
  };

  return (
    <>
      <BranchTableContainer>
        <thead>
          <BranchTableTr>
            <BranchTableTh>Branch Id</BranchTableTh>
            <BranchTableTh>Name</BranchTableTh>
            <BranchTableTh>Phone</BranchTableTh>
            <BranchTableTh>Latitude</BranchTableTh>
            <BranchTableTh>Longitude</BranchTableTh>
            <BranchTableTh>Full Address</BranchTableTh>
            <BranchTableTh>Operations</BranchTableTh>
          </BranchTableTr>
        </thead>

        {branches.map((branch) => (
          <tbody key={branch._id}>
            <BranchTableTr>
              <BranchTableTd>{branch._id}</BranchTableTd>
              <BranchTableTd>{branch.name}</BranchTableTd>
              <BranchTableTd>{branch.phone}</BranchTableTd>
              <BranchTableTd>{branch.latitude}</BranchTableTd>
              <BranchTableTd>{branch.longitude}</BranchTableTd>
              <BranchTableTd>{branch.full_address}</BranchTableTd>
              <BranchTableTd>
                <Button sm color="success" onClick={editPopupToggle(branch)}>
                  Edit
                </Button>
              </BranchTableTd>
            </BranchTableTr>
          </tbody>
        ))}
        {editToggle && (
          <EditPopup editPopupClose={editPopupClose} branch={branch} />
        )}
      </BranchTableContainer>
    </>
  );
};

export default BranchTable;
