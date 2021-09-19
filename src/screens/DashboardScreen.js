import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import { useActions, useError } from "../hooks";

import { useHistory } from "react-router-dom";

import BranchTable from "../components/BranchTable/BranchTable";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination/Pagination";

const BranchListScreen = () => {
  const { getBranches } = useActions();

  const history = useHistory();
  const { search } = history.location;

  const page = useMemo(() => {
    const queries = new URLSearchParams(search);
    return queries.get("page");
  }, [search]);

  const { error, loading, currentPage, totalPage, branches } = useSelector(
    (state) => state.getBranches
  );
  useError(error);

  const pushSelectedPage = (selectedPage) => (e) => {
    e.preventDefault();
    let searchParams = new URLSearchParams();
    if (selectedPage) searchParams.append("page", selectedPage);
    searchParams = searchParams.toString();

    history.push(`/dashboard?${searchParams}`);
  };

  useEffect(() => {
    getBranches(page);
  }, [page]);

  return (
    <>
      <Header title="Dashboard" />
      {loading && <Loading />}
      {branches?.length ? (
        <>
          <BranchTable branches={branches} />
          <Pagination
            pushSelectedPage={pushSelectedPage}
            currentPage={currentPage}
            totalPage={totalPage}
          />
        </>
      ) : (
        !loading && <p>There is no branches. </p>
      )}
    </>
  );
};

export default BranchListScreen;
