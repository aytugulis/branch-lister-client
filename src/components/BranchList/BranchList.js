import React from "react";

import BranchCard from "../BranchCard/BranchCard";
import { BranchContainer } from "./stylesBranchList";

const BranchList = ({ branches }) => {
  return (
    <>
      <BranchContainer>
        {branches.map((branch) => (
          <BranchCard key={branch._id} branch={branch} />
        ))}
      </BranchContainer>
    </>
  );
};

export default BranchList;
