import React, { SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';

import PageButton from '../PageButton';

type ReviewsPaginationProps = {
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  numberOfReviews: number;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 767.9px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const StyledPageButton = styled(PageButton)`
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const StyledSpan = styled.span`
  margin-left: 10px;
  @media (max-width: 767.9px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

const ReviewsPagination = ({
  totalPages,
  setCurrentPage,
  currentPage,
  numberOfReviews,
}: ReviewsPaginationProps) => {
  return (
    <Container>
      <StyledPageButton
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <StyledSpan>
        Show {(currentPage - 1) * 5 + 1}-
        {currentPage * 5 > numberOfReviews ? numberOfReviews : currentPage * 5}{' '}
        of {numberOfReviews} Reviews
      </StyledSpan>
    </Container>
  );
};

export default ReviewsPagination;
