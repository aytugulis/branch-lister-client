import styled from "styled-components";
import {
  FaHome,
  FaEye,
  FaEyeSlash,
  FaBook,
  FaBrain,
  FaLongArrowAltRight,
  FaLockOpen,
  FaLock,
} from "react-icons/fa";
import { slideOut } from "../../styles/animations";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.primary.main};
  height: 4.5rem;
  box-shadow: ${({ theme: { colors } }) =>
    `1px 1px 10px 3px ${colors.primary.main};`};
`;

const List = styled.ul`
  display: ${({ listType }) => listType === "mainList" && "flex"};
  list-style: none;
  margin: 0 1rem;

  @media (max-width: 1079px) {
    display: ${({ listType }) => listType === "mainList" && "none"};
    margin: 0;
  }

  @media (min-width: 1080px) {
    display: ${({ listType }) => listType === "hamburgerList" && "none"};
    flex-grow: ${({ listType }) => listType === "mainList" && 4};
    flex-grow: ${({ rightItems }) => rightItems && 0};
  }
`;

const ListItem = styled.li`
  display: flex;
  margin: 20px 10px;
  padding: 5px 15px;
  border-radius: 3px;
  transition: 0.6s;
  background-color: ${({ theme: { colors }, active }) =>
    active && colors.secondary.dark};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondary.dark};
  }
`;

const ListLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.secondary.main};
`;

const BrandLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.secondary.main};
`;

const HamburgerMenu = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  background-color: ${({ theme: { colors } }) => colors.primary.dark};
  height: 100vh;
  width: 40vh;
  box-shadow: ${({ theme: { colors } }) =>
    `1px 1px 10px 3px ${colors.primary.dark};`};
  overflow: hidden;
  z-index: 999;
  animation: ${slideOut} 0.2s;

  @media (min-width: 1080px) {
    display: none;
  }

  @media (max-width: 500px) {
    width: 30vh;
  }
`;

const HomeIcon = styled(FaHome)`
  color: ${({ theme: { colors } }) => colors.secondary.main};
  cursor: pointer;
  margin-right: 6px;
`;

const RightArrowIcon = styled(FaLongArrowAltRight)`
  color: ${({ theme: { colors } }) => colors.secondary.main};
  cursor: pointer;
  margin-right: 6px;
`;

const LockOpenIcon = styled(FaLockOpen)`
  color: ${({ theme: { colors } }) => colors.secondary.main};
  cursor: pointer;
  margin-right: 6px;
`;

const LockIcon = styled(FaLock)`
  color: ${({ theme: { colors } }) => colors.secondary.main};
  cursor: pointer;
  margin-right: 6px;
`;

const BookIcon = styled(FaBook)`
  color: ${({ theme: { colors } }) => colors.secondary.main};
  cursor: pointer;
  margin-right: 6px;
`;

const AuthorIcon = styled(FaBrain)`
  color: ${({ theme: { colors } }) => colors.secondary.main};
  cursor: pointer;
  margin-right: 6px;
`;

const EyeIcon = styled(FaEye)`
  color: ${({ theme: { colors } }) => colors.secondary.main};
  cursor: pointer;
  margin: 1.25rem;

  @media (min-width: 1080px) {
    display: none;
  }
`;

const ClosedEyeIcon = styled(FaEyeSlash)`
  color: ${({ theme: { colors } }) => colors.secondary.main};
  cursor: pointer;
  margin: 1.25rem;

  @media (min-width: 1080px) {
    display: none;
  }
`;

export {
  Nav,
  List,
  ListItem,
  ListLink,
  BrandLink,
  HomeIcon,
  BookIcon,
  HamburgerMenu,
  EyeIcon,
  ClosedEyeIcon,
  AuthorIcon,
  RightArrowIcon,
  LockOpenIcon,
  LockIcon,
};
