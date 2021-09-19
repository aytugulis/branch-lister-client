import styled from "styled-components";

const BranchTableContainer = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 2rem auto;
  box-shadow: 3px 3px 10px grey;
`;

const BranchTableTr = styled.tr`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;

  &:nth-child(even) {
    background-color: #ffffff;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const BranchTableTh = styled.th`
  padding: 1rem;
  background-color: ${({ theme: { colors } }) => colors.primary.main};
  color: white;
`;

const BranchTableTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

export { BranchTableContainer, BranchTableTr, BranchTableTh, BranchTableTd };
