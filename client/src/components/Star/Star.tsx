import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../../styles/theme';

const StarContainer = styled.div`
  position: relative;
`;

const Rating = styled.div<{ height: string }>`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  font-size: ${({ height }) => parseInt(height) / 5}px;
  font-weight: bold;
  color: white;
`;

export type StarProps = {
  percentage: number;
  height: string;
  width: string;
  generalAvg?: number;
};

const Stars = ({ percentage = 100, height, width, generalAvg }: StarProps) => {
  const theme = useTheme() as Theme;
  const grey = theme.color.grey[50];
  const yellow = theme.color.yellow[500];
  return (
    <StarContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 32 32"
      >
        <defs>
          <linearGradient id={`grad-${percentage}`}>
            <stop offset={`${percentage}%`} stopColor={yellow} />
            <stop offset={`${percentage}%`} stopColor={grey} />
          </linearGradient>
        </defs>
        <path
          fill={`url(#grad-${percentage})`}
          d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
        />
      </svg>
      {!!generalAvg && (
        <Rating height={height} data-cy="rating">
          {generalAvg}
        </Rating>
      )}
    </StarContainer>
  );
};

export default Stars;
