import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Bot from '../componentes/Bot';
import './PagInicio.css';

const Portada = () => (
  <div className="masthead">
    <Grid>
      <Row className="superRow">
        <Col lg={6}>
          <h1>Bienvenido a ubot! </h1>
          <p>El mejor servicio para atender a tus clientes sin preocupaciones, de manera rápida y efectiva</p>
        </Col>
        <Col lg={6}>
          <Bot />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Portada;
