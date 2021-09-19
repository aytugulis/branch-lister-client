import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";

import { useActions, useError } from "../../hooks";

import { Button, InputText } from "../../styles/mainStyles";
import {
  PopupBackground,
  PopupContainer,
  PopupText,
  PopupInputContainer,
} from "./stylesPopup";

import Loading from "../Loading/Loading";

const EditPopup = ({ editPopupClose, branch }) => {
  const { editBranch, cleanupBranch, updateBranch } = useActions();

  const { error, loading, updated } = useSelector((state) => state.editBranch);
  useError(error);

  const { totalCount, currentPage, totalPage, branches } = useSelector(
    (state) => state.getBranches
  );

  const [name, setName] = useState(branch.name);
  const [phone, setPhone] = useState(branch.phone);
  const [latitude, setLatitude] = useState(branch.latitude);
  const [longitude, setLongitude] = useState(branch.longitude);
  const [fullAddress, setFullAddress] = useState(branch.full_address);

  const nameChanceHandler = (e) => setName(e.target.value);
  const phoneChanceHandler = (e) => setPhone(e.target.value);
  const latitudeChanceHandler = (e) => setLatitude(e.target.value);
  const longitudeChanceHandler = (e) => setLongitude(e.target.value);
  const fullAddressChanceHandler = (e) => setFullAddress(e.target.value);

  const editPopupHandler = (e) => {
    e.preventDefault();
    editBranch(branch._id, name, phone, latitude, longitude, fullAddress);
  };

  useEffect(() => {
    if (updated) {
      toast.success("Branch is updated");

      const index = branches.findIndex((item) => item._id === branch._id);
      branches.splice(index, 1, {
        _id: branch._id,
        name,
        phone,
        latitude,
        longitude,
        full_address: fullAddress,
      });

      updateBranch(totalCount, currentPage, totalPage, branches);

      editPopupClose();
    }
  }, [updated]);

  useEffect(() => {
    return () => {
      cleanupBranch();
    };
  }, []);

  return (
    <>
      <PopupBackground>
        <PopupContainer>
          <PopupText>Branch Id: {branch._id}</PopupText>

          <PopupInputContainer>
            <span>Name: </span>
            <InputText
              popupInput
              value={name}
              name="name"
              type="text"
              placeholder="Name"
              onChange={nameChanceHandler}
            />
          </PopupInputContainer>
          <PopupInputContainer>
            <span>Phone: </span>
            <InputText
              popupInput
              value={phone}
              name="phone"
              type="text"
              placeholder="Phone"
              onChange={phoneChanceHandler}
            />
          </PopupInputContainer>
          <PopupInputContainer>
            <span>Latitude: </span>
            <InputText
              popupInput
              value={latitude}
              name="latitude"
              type="text"
              placeholder="Latitude"
              onChange={latitudeChanceHandler}
            />
          </PopupInputContainer>
          <PopupInputContainer>
            <span>Longitude: </span>
            <InputText
              popupInput
              value={longitude}
              name="longitude"
              type="text"
              placeholder="Longitude"
              onChange={longitudeChanceHandler}
            />
          </PopupInputContainer>
          <PopupInputContainer>
            <PopupText>Full Address: </PopupText>
            <InputText
              popupInput
              value={fullAddress}
              name="full_address"
              type="text"
              placeholder="Full Address"
              onChange={fullAddressChanceHandler}
            />
          </PopupInputContainer>

          <Button popupButton color="danger" onClick={editPopupClose}>
            Close
          </Button>
          <Button popupButton color="success" onClick={editPopupHandler}>
            Edit
          </Button>
        </PopupContainer>
      </PopupBackground>
      {loading && <Loading />}
    </>
  );
};

export default EditPopup;
