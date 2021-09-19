import styled from "styled-components";

const HeadContainer = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

const HeadTitle = styled.h2`
  font-size: 1.6rem;
  padding: 0.5rem;
`;

const HeadLine = styled.hr`
  border: 0;
  height: 1px;
  margin: 0 auto;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.25)
  );
`;

export { HeadContainer, HeadTitle, HeadLine };
