// prettier-ignore
import React from 'react';
import styled from 'styled-components';
import Star from '../Star';

type ReviewAveragesType = {
  generalAvg: number;
  aspecsAvg: {
    location: number;
    priceQuality: number;
    childFriendly: number;
    restaurants: number;
    sanitaryState: number;
    pool: number;
  };
  traveledWithAvg: {
    FAMILY: number;
    FRIENDS: number;
    OTHER: number;
    COUPLE: number;
    SINGLE: number;
  };
};

export type ReviewsPageHeaderProps = {
  title: string;
  body: string;
  reviewAverages: ReviewAveragesType;
};

const Container = styled.div`
  padding: 20px;
`;

const ReviewsPageHeaderTitle = styled.h1`
  font-size: 2em;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewsPageHeader = ({
  reviewAverages,
  title,
  body,
}: ReviewsPageHeaderProps) => {
  return (
    <Container>
      <TitleContainer data-cy="page-header">
        <ReviewsPageHeaderTitle>{title}</ReviewsPageHeaderTitle>
        <Star
          generalAvg={reviewAverages.generalAvg}
          percentage={100}
          width="60px"
          height="60px;"
        />
      </TitleContainer>
      <p>{body}</p>
    </Container>
  );
};

export default ReviewsPageHeader;
