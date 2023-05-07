import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/theme';

export type ProgressMeterProps = {
  rating: number;
};

const Container = styled.div`
  box-style: border-box;
  width: 100%;
  height: 15px;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: ${color('grey', 100)};
`;

const Gauge = styled.div<{ rating: number }>`
  height: 15px;
  width: ${({ rating }) => `${rating}%`};
  background-color: ${color('blue', 400)};
`;

const ProgressMeter = ({ rating }: ProgressMeterProps) => {
  return (
    <Container>
      <Gauge rating={rating}></Gauge>
    </Container>
  );
};

export default ProgressMeter;
