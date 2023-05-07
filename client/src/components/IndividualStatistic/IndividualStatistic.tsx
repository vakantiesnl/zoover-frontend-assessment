import React from 'react';
import ProgressMeter from '../ProgressMeter';
import Stars from '../Stars';
import styled from 'styled-components';
import { RatingsStatisticsSectionType } from '../RatingsStatisticsSection';

const Container = styled.div`
  width: 100%;
`;

const TitleSpan = styled.div`
  margin-bottom: 8px;
  font-size: 12px;
`;

type IndividualStatisticProps = {
  name: string;
  type: RatingsStatisticsSectionType;
  value: number;
};

const IndividualStatistic = ({
  name,
  value,
  type,
}: IndividualStatisticProps) => {
  const uppercaseName =
    name.slice(0, 1).toUpperCase() +
    name
      .slice(1)
      .split('')
      .map((char, i) =>
        i > 0 &&
        char.toLocaleUpperCase() === char &&
        name.charAt(i - 1).toLowerCase() === name.charAt(i - 1)
          ? ` ${char}`
          : char
      )
      .join('');

  const of = type === 'meter' ? 100 : 10;

  return (
    <Container>
      <TitleSpan>
        <span>{uppercaseName} </span>
        <span>
          ({value}/{of})
        </span>
      </TitleSpan>
      {type === 'stars' ? (
        <Stars rating={value} />
      ) : (
        <ProgressMeter rating={value} />
      )}
    </Container>
  );
};

export default IndividualStatistic;
