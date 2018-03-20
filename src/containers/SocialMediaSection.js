import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import Whatsapp from '../img/whatsapp.png';
import Facebook from '../img/facebook.png';
import Skype from '../img/skype.png';
import Slack from '../img/slack.png';

const SocialMediaSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row>
        <Title>Intégralo en tus redes sociales</Title>
      </Row>
      <Row>
        <Col lg={3}>
          <img src={Whatsapp} className="logo" alt="" width="100px" height="100px"/>
        </Col>
        <Col lg={3}>
          <img src={Facebook} className="logo" alt="" width="100px" height="100px"/>
        </Col>
        <Col lg={3}>
          <img src={Skype} className="logo" alt="" width="100px" height="100px"/>
        </Col>
        <Col lg={3}>
          <img src={Slack} className="logo" alt="" width="100px" height="100px"/>
        </Col>
      </Row>
    </Grid>
  </SuperContainer> 
);

export default SocialMediaSection;

const SuperContainer = styled.header`
  position: relative;
  width: 100%;
  background: hsl(0, 0%, 98%);
  padding-bottom: 150px;
`;
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 80px;
`;