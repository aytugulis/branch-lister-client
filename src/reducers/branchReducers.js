import {
  BRANCH_GET_REQUEST,
  BRANCH_GET_SUCCESS,
  BRANCH_GET_FAIL,
  BRANCH_EDIT_REQUEST,
  BRANCH_EDIT_SUCCESS,
  BRANCH_EDIT_FAIL,
  BRANCH_EDIT_RESET,
} from "../constants/branchConstants";

const getBranchesReducer = (state = {}, action) => {
  switch (action.type) {
    case BRANCH_GET_REQUEST:
      return { loading: true, error: undefined };

    case BRANCH_GET_SUCCESS:
      const { totalCount, currentPage, totalPage, branches } = action.payload;
      return {
        loading: false,
        totalCount,
        currentPage,
        totalPage,
        branches,
      };

    case BRANCH_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

const editBranchReducer = (state = {}, action) => {
  switch (action.type) {
    case BRANCH_EDIT_REQUEST:
      return { loading: true };

    case BRANCH_EDIT_SUCCESS:
      return { loading: false, updated: true };

    case BRANCH_EDIT_FAIL:
      return { loading: false, error: action.payload };

    case BRANCH_EDIT_RESET:
      return { loading: false, error: false, updated: false };

    default:
      return state;
  }
};

export { getBranchesReducer, editBranchReducer };
