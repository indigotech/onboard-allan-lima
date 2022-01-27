import React from 'react';
import { ButtonPageStyled, PaginationStyled } from './pagination.component.styled';

const MAX_VISIBLE_PAGES = 9;
const MAX_VISIBLE_PAGES_LEFT = (MAX_VISIBLE_PAGES - 1) / 2;

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
  const pages = props.loading ? MAX_VISIBLE_PAGES_LEFT : Math.ceil(total / limit);

  const pagesRight = pages - currentPage;
  let first =
    pagesRight >= MAX_VISIBLE_PAGES_LEFT ? currentPage - MAX_VISIBLE_PAGES_LEFT : pages - MAX_VISIBLE_PAGES + 1;
  first = Math.max(first, 1);

  const handlePageChange = (page: number) => {
    props.setOffset((page - 1) * limit);
  };

  return (
    <PaginationStyled>
      <ButtonPageStyled onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        <span>&lt;&lt;</span>
      </ButtonPageStyled>
      <ButtonPageStyled onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        <span>&lt;</span>
      </ButtonPageStyled>
      {Array.from({ length: Math.min(MAX_VISIBLE_PAGES, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <ButtonPageStyled key={page} active={page === currentPage} onClick={() => handlePageChange(page)}>
            {page}
          </ButtonPageStyled>
        ))}
      <ButtonPageStyled onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pages}>
        <span>&gt;</span>
      </ButtonPageStyled>
      <ButtonPageStyled onClick={() => handlePageChange(pages)} disabled={currentPage === pages}>
        <span>&gt;&gt;</span>
      </ButtonPageStyled>
    </PaginationStyled>
  );
};
