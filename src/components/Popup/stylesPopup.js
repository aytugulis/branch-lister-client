import styled from "styled-components";

const PopupBackground = styled.span`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(50, 50, 50, 0.7);
  z-index: 1;
`;

const PopupContainer = styled.div`
  margin-top: 20vh;
  width: 90%;
  height: 70vh;
  background-color: lightgrey;
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-top: ${({ theme: { colors } }) => `9px solid ${colors.primary.dark}`};
  border-radius: 5px;

  @media (min-width: 720px) {
    width: 50%;
  }
`;

const PopupText = styled.p`
  color: black;
`;

const PopupInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { PopupContainer, PopupBackground, PopupText, PopupInputContainer };
