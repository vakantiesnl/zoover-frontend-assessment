import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/theme';

const Container = styled.div`
  margin-top: 10px;
  background-color: ${color('blue', 50)};
  font-size: 10px;
  padding: 10px;
  border-radius: 4px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const About = styled.div`
  margin-bottom: 20px;
`;

const Div = styled.div`
  margin: 3px 0;
`;

const ReviewAbout = () => {
  return (
    <Container>
      <About>About the Trip</About>
      <Div>
        {' '}
        date: <Bold>01/08/2016</Bold>
      </Div>
      <Div>
        with: <Bold>FAMILY</Bold>
      </Div>
    </Container>
  );
};

export default ReviewAbout;
