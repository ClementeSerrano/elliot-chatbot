import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import iphoneImg from '../img/iphone.png';

const PagInicio = () => (
  <SuperPortada>
    <Grid bsClass="container">
      <Row className="show-grid">
        <Col lg={7}>
          <ContenidoPortada>
            <Titulo1>Bienvenido a ubot!</Titulo1>
            <Titulo2>Instanteneidad, disponibilidad y eficiencia para la atención a tus clientes </Titulo2>
          </ContenidoPortada>
        </Col>
        <Col lg={5}>
          <ContenedorIphone>
            <MockupIphone />
          </ContenedorIphone>
        </Col>
      </Row>
    </Grid>
  </SuperPortada>
);

export default PagInicio;

const SuperPortada = styled.header`
  position: relative;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 100px;
  color: white;
  background: url("../img/bg-pattern.png"), #7b4397;
  background: url("../img/bg-pattern.png"), -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: url("../img/bg-pattern.png"), linear-gradient(to left, #7b4397, #dc2430);
`;
const ContenidoPortada = styled.div`
    max-width: 500px;
    margin-bottom: 100px;
    text-align: center;
`;
const Titulo1 = styled.h1`
  font-size: 65px;
  text-align: left;
  color: #fff;
`;
const Titulo2 = styled.p`
    font-size: 30px;
    text-align: left;
`;
const ContenedorIphone = styled.div`
    max-width: 325px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 207.19%;
`;
const MockupIphone = styled.div`
    width: 100%;
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