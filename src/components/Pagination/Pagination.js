import React from "react";

import {
  PaginationContainer,
  PaginationItem,
  PaginationLink,
  PaginationList,
  ThreeDotItem,
} from "./stylesPagination";

const Pagination = ({ pushSelectedPage, currentPage, totalPage }) => {
  return (
    <>
      <PaginationContainer>
        <PaginationList>
          {currentPage > 3 && (
            <>
              <PaginationItem onClick={pushSelectedPage(currentPage - 1)}>
                <PaginationLink>&#171;</PaginationLink>
              </PaginationItem>
              <ThreeDotItem>...</ThreeDotItem>
            </>
          )}

          {currentPage > 2 && (
            <PaginationItem onClick={pushSelectedPage(currentPage - 2)}>
              <PaginationLink>{currentPage - 2}</PaginationLink>
            </PaginationItem>
          )}

          {currentPage > 1 && (
            <PaginationItem onClick={pushSelectedPage(currentPage - 1)}>
              <PaginationLink>{currentPage - 1}</PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem active onClick={pushSelectedPage(currentPage)}>
            <PaginationLink active>{currentPage}</PaginationLink>
          </PaginationItem>

          {totalPage >= currentPage + 1 && (
            <PaginationItem onClick={pushSelectedPage(currentPage + 1)}>
              <PaginationLink>{currentPage + 1}</PaginationLink>
            </PaginationItem>
          )}

          {totalPage >= currentPage + 2 && (
            <PaginationItem onClick={pushSelectedPage(currentPage + 2)}>
              <PaginationLink>{currentPage + 2}</PaginationLink>
            </PaginationItem>
          )}

          {currentPage + 2 < totalPage && (
            <>
              <ThreeDotItem>...</ThreeDotItem>
              <PaginationItem onClick={pushSelectedPage(currentPage + 1)}>
                <PaginationLink>&#187;</PaginationLink>
              </PaginationItem>
            </>
          )}
        </PaginationList>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
