import React from 'react';
import './pagination.style.css';

const MAX_PAGES = 9;
const MAX_PAGES_LEFT = (MAX_PAGES - 1) / 2;

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  loading: boolean;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = (props: PaginationProps) => {
  const limit = props.limit > 0 ? props.limit : 1;
  const total = props.total;
  const offset = props.offset;
  const currentPage = offset / limit + 1;
  const pages = props.loading ? MAX_PAGES : Math.ceil(total / limit);

  const pagesRight = pages - currentPage;
  let first = pagesRight >= MAX_PAGES_LEFT ? currentPage - MAX_PAGES_LEFT : pages - MAX_PAGES + 1;
  first = Math.max(first, 1);

  const handlePageChange = (page: number) => {
    props.setOffset((page - 1) * limit);
  };

  return (
    <div className='PaginationContainer'>
      <button className='ButtonPage' onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        <span>&lt;&lt;</span>
      </button>
      <button className='ButtonPage' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        <span>&lt;</span>
      </button>
      {Array.from({ length: Math.min(MAX_PAGES, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <button
            key={page}
            className={`ButtonPage ${page === currentPage ? 'ButtonPage--active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      <button className='ButtonPage' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pages}>
        <span>&gt;</span>
      </button>
      <button className='ButtonPage' onClick={() => handlePageChange(pages)} disabled={currentPage === pages}>
        <span>&gt;&gt;</span>
      </button>
    </div>
  );
};
