import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import chatBot from '../img/chatbot.png';
import conversacion from '../img/conversacion.png';
import crecimiento from '../img/crecimiento.png';

const SeccionIntro = () => (
  <MargenSeccion>
    <Grid bsClass="container">
      <Row>
        <Col lg={4}>
          <div className="logo">
            <img src={chatBot} alt="" width="170" height="150" />
          </div>
          <Parrafo> Un asistente virtual de ventas y servicio al cliente</Parrafo>
        </Col>
        <Col lg={4}>
          <div className="logo">
            <img src={conversacion} alt="" width="180" height="150" />
          </div>
          <Parrafo> Que mantiene conversaciones amistosas e instantáneas con tus clientes</Parrafo>
        </Col>
        <Col lg={4}>
          <div className="logo">
            <img src={crecimiento} alt="" width="170" height="150" />
          </div>
          <Parrafo> Y potencia la productividad en tus ventas</Parrafo>
        </Col>
      </Row>
    </Grid>
  </MargenSeccion>
);

export default SeccionIntro;

const MargenSeccion = styled.section`
  position: relative;
  padding: 150px 0;
  background-color: #fff;
  text-align: center;
`;

const Titulo = styled.h1`
  font-size: 65px;
  margin-bottom: 40px;
`;

const Parrafo = styled.p`
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
`;

const ImgChatBot = styled.div`
  padding-bottom: 61.775701%;
  position: relative;
  top: 0; 
  bottom: 0; 
  left: 0; 
  right: 0;
  width: 60%; 
  height: 60%;
  background-size: 100% 100%;
  background-image: url(${chatBot});
`;
