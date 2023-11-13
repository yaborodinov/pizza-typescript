import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onPageCountChange: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageCountChange}) => {
  return (
    <>
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => onPageCountChange(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
        />
    </>
  )
}

export default Pagination;
