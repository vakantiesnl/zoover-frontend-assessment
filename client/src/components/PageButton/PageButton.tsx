import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { color } from '../../styles/theme';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  className?: string;
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ active?: boolean; arrowType?: string }>`
  background-color: ${({ active }) => (active ? color('blue', 400) : 'white')};
  color: ${({ active, arrowType }) =>
    active
      ? 'white'
      : arrowType === 'left'
      ? color('grey', 900)
      : color('blue', 400)};
  border: 1px solid
    ${({ active }) => (active ? color('blue', 400) : color('grey', 100))};
  padding: 5px 10px;
  margin: 0 0px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) =>
      active ? color('blue', 500) : color('grey', 50)};
  }
`;

const PageButton = ({
  totalPages,
  currentPage,
  setCurrentPage,
  className,
}: PaginationProps) => {
  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const generateButtons = () => {
    const buttons = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => changePage(i)}
          active={i === currentPage}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };
  return (
    <PaginationContainer className={className}>
      <Button arrowType="left" onClick={() => changePage(1)}>
        &laquo;
      </Button>
      <Button
        arrowType="left"
        onClick={() => changePage(Math.max(1, currentPage - 1))}
      >
        &lt;
      </Button>
      {generateButtons()}
      <Button onClick={() => changePage(Math.min(totalPages, currentPage + 1))}>
        &gt;
      </Button>
      <Button onClick={() => changePage(totalPages)}>&raquo;</Button>
    </PaginationContainer>
  );
};

export default PageButton;
