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

/**
 * Calculates the star rating for a holiday destination based on a given rating value.
 *
 * @param {StarsProps['rating']} rating - The rating value for the holiday destination, on a scale of 0-10.
 * @returns {number[]} An array of star rating values, where 100 represents a completely filled star, 0 represents an empty star, and any value in between represents a partially filled star.
 *
 * @example
 * //Returns [100, 100, 100, 50, 0, 0, 0, 0, 0, 0] for a rating of 3.5
 * calculateStars(3.5);
 */
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
