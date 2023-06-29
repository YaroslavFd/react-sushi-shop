import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./styles.module.scss";

interface iPaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<iPaginationProps> = ({
  currentPage,
  onChangePage,
}) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage - 1}
  />
);
