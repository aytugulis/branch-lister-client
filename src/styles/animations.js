import { keyframes } from "styled-components";

const slideOut = keyframes`
  from {
    width: 0vw;
  }

/*   to {
    width: 40vw;
  } */
`;

const blink = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.98);
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

export { slideOut, blink, rotate };
