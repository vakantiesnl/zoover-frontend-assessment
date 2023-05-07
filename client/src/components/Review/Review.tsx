import React from 'react';
import styled from 'styled-components';
import ReviewMainContent from '../ReviewMainContent';
import RatingsStatisticsSection from '../RatingsStatisticsSection';

const Container = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid hsl(0, 0%, 93%);
`;

type ReviewProps = {
  reviewAverages: object;
  title: string;
  body: string;
  user: string;
  entryDate: number;
  locale: string;
  general: number;
};

const Review = ({
  reviewAverages,
  title,
  body,
  user,
  entryDate,
  locale,
  general,
}: ReviewProps) => {
  return (
    <Container>
      <ReviewMainContent
        title={title}
        body={body}
        user={user}
        entryDate={entryDate}
        locale={locale}
        general={general}
      />
      <RatingsStatisticsSection
        heading="Ratings of aspects:"
        type="stars"
        reviewAverages={reviewAverages}
      />
    </Container>
  );
};

export default Review;
