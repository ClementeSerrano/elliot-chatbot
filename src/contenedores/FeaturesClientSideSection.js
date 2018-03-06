import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import FullTimeAtention from '../img/fullTimeAtention.png'; 
import InstantaniusMessages from '../img/instantaniusMessages.png';
import HappyFace from '../img/happyFace.png';
import Languages from '../img/languages.png';

const FeaturesClientSideSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={6}>
          <Row>
            <Col lg={6}>
              <img src={FullTimeAtention} className="logo" alt="" width="155px" height="100px"/>
              <Parragraph>Atención a toda hora y para cientos de clientes a la vez</Parragraph>
            </Col>
            <Col lg={6}>
              <img src={InstantaniusMessages} className="logo" alt="" width="130px" height="100px"/>
              <Parragraph>Respuestas instantáneas, sin formularios, emails o llamados</Parragraph>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <img src={HappyFace} className="logo" alt="" width="97px" height="100px"/>
              <Parragraph>Conversaciones personalizadas y eficientes, cotidianas y amigables</Parragraph>
            </Col>
            <Col lg={6}>
              <img src={Languages} className="logo" alt="" width="120px" height="100px"/>
              <Parragraph>Manejo de múltiples idiomas para impulsar las relaciones internacionales</Parragraph>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row>
            <Title>Mejores </Title> 
          </Row>
          <Row>
            <SubTitle>conversaciones </SubTitle>
            <BoldTitle> impulsan</BoldTitle>
          </Row>
          <Row>
            <BoldTitle>mejores </BoldTitle>
            <SubTitle> fidelizaciones</SubTitle>
          </Row>
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default FeaturesClientSideSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 150px 0;
  background-color: #262626;
`;

const Title = styled.h1`
  font-size: 150px;
  text-align: right;
  color: #fff;
  margin-top:auto;
  margin-bottom:auto;
`;
const BoldTitle = styled.span`
  font-size: 50px;
  font-weight: bold;
  text-align: right;
  color: #808080;
`;
const SubTitle = styled.span`
  font-size: 30px;
  text-align: right;
  color: #808080;
`;
const Parragraph = styled.p`
  font-size: 20px;
  color: #bfbfbf;
  margin-top: 20px;
  margin-bottom: 40px;
`;
