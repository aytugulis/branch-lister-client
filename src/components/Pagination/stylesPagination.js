import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  //align-items: center;
`;

const PaginationList = styled.ul`
  display: flex;
  background: white;
  padding: 7px 14px;
  border-radius: 30px;
  box-shadow: 0 3px 10px grey;
`;

const PaginationLink = styled.a`
  //display: block;
  //text-decoration: none;
  font-weight: bold;
  color: ${({ active }) => active && "white"};
  transition: 0.5s;
`;

const PaginationItem = styled.li`
  list-style: none;
  line-height: 40px;
  margin: 0 5px;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s;

  background-color: ${({ theme: { colors }, active }) =>
    active && colors.primary.light};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary.light};
  }

  &:hover ${PaginationLink} {
    color: white;
  }
`;

const ThreeDotItem = styled.li`
  list-style: none;
  line-height: 40px;
  margin: 0 5px;
  text-align: center;
  cursor: context-menu;
`;

export {
  PaginationContainer,
  PaginationList,
  PaginationItem,
  PaginationLink,
  ThreeDotItem,
};
