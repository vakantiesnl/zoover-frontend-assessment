import React from 'react';
import styled from 'styled-components';
import ReviewInfo from '../ReviewInfo';
import IndividualStatistic from '../IndividualStatistic/IndividualStatistic';
import ReviewAbout from '../ReviewAbout';

const Container = styled.div`
  padding: 0 20px;
`;

const LeftColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-right: 25px;
  }
  @media (max-width: 767.9px) {
    padding-right: 0;
  }
`;

const RightColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 767.9px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

type ReviewMainContentProps = {
  title: string;
  body: string;
  user: string;
  entryDate: number;
  locale: string;
  general: number;
};

const ReviewMainContent = ({
  title,
  body,
  user,
  entryDate,
  locale,
  general,
}: ReviewMainContentProps) => {
  return (
    <Container>
      <ReviewInfo user={user} entryDate={entryDate} locale={locale} />
      <RowWrapper>
        <LeftColumnWrapper>
          <Title>{title}</Title>
          <p>{body}</p>
        </LeftColumnWrapper>
        <RightColumnWrapper>
          <IndividualStatistic name="general" value={general} type="stars" />
          <ReviewAbout />
        </RightColumnWrapper>
      </RowWrapper>
    </Container>
  );
};

export default ReviewMainContent;
