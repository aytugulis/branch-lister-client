import styled from "styled-components";
import { blink } from "./animations";

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const Button = styled.button`
  margin: ${({ popupButton }) => !popupButton && "1rem"};
  padding: 0.25rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.7s;
  border: 2px solid;

  font-size: ${({ sm, md, lg }) =>
    sm ? "0.8rem" : md ? "1rem" : lg ? "1.2rem" : "1rem"};

  border-color: ${({ theme: { colors }, color }) =>
    color ? colors[color].main : colors.primary.main};

  color: ${({ theme: { colors }, color, outlined }) =>
    outlined ? colors[color].main : "white"};

  background-color: ${({ theme: { colors }, color, outlined }) =>
    outlined ? "white" : color ? colors[color].main : colors.primary.main};

  &:hover {
    background-color: ${({ theme: { colors }, color }) =>
      color ? colors[color].dark : colors.primary.dark};
    border-color: ${({ theme: { colors }, color }) =>
      color ? colors[color].dark : colors.primary.dark};
    color: ${({ outlined }) => outlined && "white"};
  }
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.15)
  );
`;

const InputText = styled.input`
  width: 70%;

  margin: ${({ popupInput }) => !popupInput && "10px 0"};

  border: 1px solid grey;
  border-radius: 4px;
  outline: none;
  padding: 10px;
  transition: 0.5s;
  box-shadow: 2px 2px 5px 2px lightgray;

  &:hover,
  &:focus {
    box-shadow: 2px 2px 5px 2px grey;
  }

  &:focus {
    animation: ${blink} 1s infinite alternate;
  }
`;

export { Button, Line, InputText, Container };
