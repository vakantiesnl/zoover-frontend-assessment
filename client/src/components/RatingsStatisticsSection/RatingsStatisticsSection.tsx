import React from 'react';
import styled from 'styled-components';
import IndividualStatistic from '../IndividualStatistic/IndividualStatistic';

const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-row-gap: 5px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767.9px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Wrapper = styled.div`
  padding: 0 20px;
`;

type RatingsStatisticsSectionProps = {
  heading: string;
  type: RatingsStatisticsSectionType;
  reviewAverages: object;
};

export type RatingsStatisticsSectionType = 'meter' | 'stars';

const Title = styled.h2`
  font-size: 1.5rem;
`;

const RatingsStatisticsSection = ({
  heading,
  type,
  reviewAverages,
}: RatingsStatisticsSectionProps) => {
  return (
    <Wrapper>
      <Title>{heading}</Title>
      <Container>
        {Object.entries(reviewAverages)
          .filter(([, value]) => value > 0)
          .map(([key, value]) => (
            <IndividualStatistic
              key={key}
              name={key}
              type={type}
              value={value}
            />
          ))}
      </Container>
    </Wrapper>
  );
};

export default RatingsStatisticsSection;
