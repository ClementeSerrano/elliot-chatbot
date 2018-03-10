import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import macbookMockup from '../img/macbook.png';

const FeaturesCompanySideSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row>
        <Col lg={12}>
          <Title>Lo que te damos</Title>
        </Col>
      </Row>
      <Row>
        <MockupMacbook />
      </Row>
    </Grid>
  </SuperContainer>
);

export default FeaturesCompanySideSection;

const SuperContainer = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 800px;
  background: #fff;
`;
const TitleContent = styled.div`
  max-width: 500px;
`;
const Title = styled.h1`
  font-size: 150px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 80px;
  @media screen and (max-width: 850px) {
    font-size: 100px;
  }
  @media screen and (max-width: 800px) {
    font-size: 70px;
  }
`;
const MockupMacbook = styled.div`
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  width: 100%; 
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${macbookMockup});
  @media screen and (max-width: 850px) {
    max-width: 90%;
  }
  @media screen and (max-width: 800px) {
    max-width: 95%;
  }
`;
