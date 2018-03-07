import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import ChildPackage from '../img/childPackage.png'; 
import YoungPackage from '../img/youngPackage.png';
import AdultPackage from '../img/adultPackage.png';

const ProjectPackages = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={6}>
          <Row>
            <Title>Planes </Title> 
          </Row>
        </Col>
        <Col lg={6}>
          <Row>
            <Col lg={6}>
              <img src={ChildPackage} className="logo" alt="" width="125px" height="120px"/>
              <ParragraphContainer>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Chatbot básico </Parragraph>
                </Row>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Redirección a ejecutivo </Parragraph>
                </Row>
              </ParragraphContainer>
            </Col>
            <Col lg={6}>
              <img src={YoungPackage} className="logo" alt="" width="125px" height="120px"/>
              <ParragraphContainer>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Análisis de preguntas (KPIs) </Parragraph>
                </Row>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Captura de datos de clientes </Parragraph>
                </Row>
              </ParragraphContainer>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <img src={AdultPackage} className="logo" alt="" width="125px" height="120px"/>
              <ParragraphContainer>
                <Row> 
                  <FontAwesome name='check-circle' /> <Parragraph> Conexión a bases de datos y ERP para interacciones comerciales </Parragraph>
                </Row>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Análisis de comportamiento del cliente </Parragraph>
                </Row>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Encuestas automatizadas </Parragraph>
                </Row>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Sistema de mensajería dirigida programada y filtrada </Parragraph>
                </Row>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Sistema de alertas intención de compra o uso de palabras claves</Parragraph>
                </Row>
                <Row>
                  <FontAwesome name='check-circle' /> <Parragraph> Atención multidioma</Parragraph>
                </Row>
              </ParragraphContainer>
            </Col>
          </Row>
        </Col>
      </Row> 
    </Grid>
  </SectionMargin>
);

export default ProjectPackages;

const SectionMargin = styled.section`
  position: relative;
  padding: 150px 0;
  background-color: #fff;
`;
const Title = styled.h1`
  font-size: 150px;
  text-align: left;
  margin-top:auto;
  margin-bottom:auto;
`;
const ParragraphContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: left;
`;
const Parragraph = styled.span`
  font-size: 20px;
  color: #bfbfbf;
`;
