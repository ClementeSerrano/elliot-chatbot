import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import iphoneImg from '../img/iphone.png';

const FrontSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row className="show-grid">
        <Col lg={7}>
          <FrontContent>
            <Title1>Bienvenido a ubot!</Title1>
            <Title2>Instanteneidad, disponibilidad y eficiencia para la atención a tus clientes </Title2>
          </FrontContent>
        </Col>
        <Col lg={5}>
          <IphoneContainer>
            <IphoneMockup />
          </IphoneContainer>
        </Col>
      </Row>
    </Grid>
  </SuperContainer>
);

export default FrontSection;

const SuperContainer = styled.header`
  position: relative;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 400px;
  color: white;
  background: #7b4397;
  background: -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: linear-gradient(to left, #7b4397, #dc2430);
`;
const FrontContent = styled.div`
  max-width: 500px;
  margin-bottom: 100px;
  text-align: center;
`;
const Title1 = styled.h2`
  font-size: 150px;
  text-align: left;
  color: #fff;
  @media screen and (max-width: 850px) {
    font-size: 100px;
  }
  @media screen and (max-width: 800px) {
    font-size: 70px;
  }
`;
const Title2 = styled.p`
  font-size: 30px;
  text-align: left;
`;
const IphoneContainer = styled.div`
  max-width: 325px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 207.19%;
`;
const IphoneMockup = styled.div`
  margin-top: 180px;
  margin-bottom: 40px;
  padding-bottom: 61.775701%;
  position: absolute;
  top: 0; 
  bottom: 0; 
  left: 0; 
  right: 0;
  width: 100%; 
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${iphoneImg});
`;
