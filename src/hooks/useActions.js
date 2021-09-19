import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [dispatch]
  );
};
