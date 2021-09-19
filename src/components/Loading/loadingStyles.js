import styled from "styled-components";
import { rotate } from "../../styles/animations";

const SpinnerContainer = styled.span`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
`;

const Spinner = styled.span`
  margin-top: 50vh;
  width: 45px;
  height: 45px;
  display: inline-block;
  border: ${({ theme: { colors } }) => `5px solid ${colors.secondary.dark}`};
  border-left-color: ${({ theme: { colors } }) => colors.success.light};
  border-top-color: ${({ theme: { colors } }) => colors.success.light};
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
`;

export { Spinner, SpinnerContainer };
