import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import chatBot from '../img/chatbot.png';
import conversacion from '../img/conversacion.png';
import crecimiento from '../img/crecimiento.png';

const IntroSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={4}>
          <div className="logo">
            <img src={chatBot} alt="" width="170" height="150" />
          </div>
          <Paragraph> Un asistente virtual de ventas y servicio al cliente</Paragraph>
        </Col>
        <Col lg={4}>
          <div className="logo">
            <img src={conversacion} alt="" width="180" height="150" />
          </div>
          <Paragraph> Que mantiene conversaciones amistosas e instantáneas con tus clientes</Paragraph>
        </Col>
        <Col lg={4}>
          <div className="logo">
            <img src={crecimiento} alt="" width="170" height="150" />
          </div>
          <Paragraph> Y potencia la productividad en tus ventas</Paragraph>
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default IntroSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 150px 0;
  background-color: #fff;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
`;
