import React from 'react';
import styled from 'styled-components';
import Star from '../Star';

const Container = styled.div`
  display: flex;
  gap: 2px;
`;

export type StarsProps = {
  rating: number;
};

const calculateStars = (rating: StarsProps['rating']) => {
  // Add test for this function
  const TOTAL_STARS = 10;

  // Completely filled stars
  const filledStars = Math.trunc(rating);

  // Partially filled stars
  const remainderPercentage = Math.floor((rating - filledStars) * 100);
  const partiallyFilledStars = remainderPercentage > 0 ? 1 : 0;

  // Empty stars
  const emptyStars = TOTAL_STARS - filledStars - partiallyFilledStars;

  return [
    ...Array(filledStars).fill(100),
    ...Array(partiallyFilledStars).fill(remainderPercentage),
    ...Array(emptyStars).fill(0),
  ];
};

const Stars = ({ rating }: StarsProps) => {
  const arrayOfStars = calculateStars(rating);

  return (
    <Container>
      {arrayOfStars.map((filling, index) => (
        <Star key={index} width="16px" height="16px" percentage={filling} />
      ))}
    </Container>
  );
};

export default Stars;
