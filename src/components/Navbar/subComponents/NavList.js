import React from "react";
import {
  List,
  ListItem,
  ListLink,
  BookIcon,
  AuthorIcon,
  RightArrowIcon,
  LockOpenIcon,
  LockIcon,
} from "../stylesNavbar";
import { Line } from "../../../styles/mainStyles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";
import { useHistory } from "react-router-dom";

const NavList = ({ listType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <>
      <List listType={listType}>
        {userInfo && (
          <ListLink to="/branches">
            <ListItem>
              <AuthorIcon size="1.2rem" />
              Branches
            </ListItem>
          </ListLink>
        )}

        {userInfo && userInfo.user && userInfo.user.role === "admin" && (
          <ListLink to="/dashboard">
            <ListItem>
              <BookIcon size="1.2rem" />
              Dashboard
            </ListItem>
          </ListLink>
        )}
      </List>

      <Line />

      {!userInfo ? (
        <List listType={listType} rightItems>
          <ListLink to="/register">
            <ListItem>
              <RightArrowIcon size="1.2rem" />
              Register
            </ListItem>
          </ListLink>

          <ListLink to="/login">
            <ListItem>
              <LockOpenIcon size="1.2rem" />
              Login
            </ListItem>
          </ListLink>
        </List>
      ) : (
        <List listType={listType} rightItems>
          <ListLink to="/" onClick={logoutHandler}>
            <ListItem>
              <LockIcon size="1.2rem" />
              Logout
            </ListItem>
          </ListLink>
        </List>
      )}
    </>
  );
};

export default NavList;
