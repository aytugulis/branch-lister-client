import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.secondary.main};
  padding: 0 2rem;
`;

const Box = styled.div`
  height: 600px;
  width: 500px;
  margin-top: 2rem;
  box-shadow: 1px 1px 10px 1px grey;
  text-align: center;
  background-color: white;
  border-left: ${({ theme: { colors } }) => `solid 7px ${colors.primary.main}`};
  border-radius: 3px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const Head = styled.h2`
  margin: 2rem;
`;

const AuthLine = styled.hr`
  border: none;
  border-top: 3px double #8c8c8c;
  color: #8c8c8c;
  margin: 0 85px;

  &:after {
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: #fff;
  }
`;

const AuthLink = styled(Link)`
  cursor: pointer;

  color: ${({ theme: { colors } }) => colors.primary.main};
`;

export { AuthBoxContainer, Box, Head, Form, AuthLine, AuthLink };
