import axios from "axios";
import {
  BRANCH_GET_REQUEST,
  BRANCH_GET_SUCCESS,
  BRANCH_GET_FAIL,
  BRANCH_EDIT_REQUEST,
  BRANCH_EDIT_SUCCESS,
  BRANCH_EDIT_FAIL,
  BRANCH_EDIT_RESET,
} from "../constants/branchConstants";

const getBranches = (page) => async (dispatch) => {
  try {
    dispatch({
      type: BRANCH_GET_REQUEST,
    });

    let searchParams = new URLSearchParams();
    if (page) searchParams.append("page", page);
    searchParams = searchParams.toString();

    const { data } = await axios.get(`https://branch-lister.herokuapp.com/api/branch/?${searchParams}`);

    dispatch({
      type: BRANCH_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BRANCH_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const editBranch =
  (_id, name, phone, latitude, longitude, full_address) => async (dispatch) => {
    try {
      dispatch({
        type: BRANCH_EDIT_REQUEST,
      });

      const { token } = JSON.parse(localStorage.getItem("userInfo"));

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(
        `https://branch-lister.herokuapp.com/api/branch/${_id}`,
        { name, phone, latitude, longitude, full_address },
        config
      );

      dispatch({
        type: BRANCH_EDIT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: BRANCH_EDIT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

const cleanupBranch = () => (dispatch) => {
  dispatch({
    type: BRANCH_EDIT_RESET,
  });
};

const updateBranch =
  (totalCount, currentPage, totalPage, branches) => (dispatch) => {
    dispatch({
      type: BRANCH_GET_SUCCESS,
      payload: {
        totalCount,
        currentPage,
        totalPage,
        branches,
      },
    });
  };

export { getBranches, editBranch, cleanupBranch, updateBranch };
