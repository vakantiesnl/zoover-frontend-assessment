import React from 'react';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

type ReviewInfoProps = {
  user: string;
  entryDate: number;
  locale: string;
};

const Container = styled.div`
  font-size: 12px;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const FlagWrap = styled.span`
  font-size: 14px;
`;
const ReviewInfo = ({ user, entryDate, locale }: ReviewInfoProps) => {
  const date = new Date(entryDate);
  const formattedDate = date.toLocaleDateString('en-GB');
  const countryCode =
    locale === 'en' ? 'GB' : locale === 'nl-be' ? 'BE' : locale.toUpperCase();

  return (
    <Container>
      <span>Added by </span>
      <BoldSpan>{user} </BoldSpan>
      <FlagWrap>
        <ReactCountryFlag countryCode={countryCode} title={countryCode} />
      </FlagWrap>
      <span> on </span>
      <BoldSpan>{formattedDate}</BoldSpan>
    </Container>
  );
};

export default ReviewInfo;
