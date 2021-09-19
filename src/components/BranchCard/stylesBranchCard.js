import styled from "styled-components";

const Card = styled.nav`
  margin: 1.5rem 2rem;
  transition: 0.3s;
  width: 20%;

  box-shadow: ${({ theme: { colors } }) =>
    `1px 2px 5px ${colors.colorless.main};`};

  &:hover {
    box-shadow: ${({ theme: { colors } }) =>
      `1px 4px 10px ${colors.colorless.main};`};
  }

  @media (max-width: 768px) {
    min-width: 50%;
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
  padding: 20px;
  text-align: center;
`;

const CardHeader = styled.h4`
  font-size: 1.3rem;
`;

const CardTitle = styled.p`
  padding: 8px 0;
`;

const CardLine = styled.hr`
  border: 0;
  height: 1px;
  width: 50%;
  margin: 0 auto;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.25)
  );
`;

export { Card, CardImage, CardBody, CardHeader, CardTitle, CardLine };
