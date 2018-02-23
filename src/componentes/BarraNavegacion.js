import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import styled from 'styled-components';

import logo from '../img/logo.png';

const BarraNavegacion = () => (
  <NavHeader>
    <SuperNavBar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Logo src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
              Productos
          </NavItem>
          <NavItem eventKey={2} href="#">
              Servicios
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </SuperNavBar>
  </NavHeader>
);

export default BarraNavegacion;

const NavHeader = styled.header`
    padding: 40px;
`;

const SuperNavBar = styled(Navbar)`
    border-color: rgba(34, 34, 34, 0.05);
    font-family: 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 100;
    letter-spacing: 2px;
    font-size: 12px;
    text-transform: uppercase;
`;

const Logo = styled.img`
  height: 60px; 
  width: 120px; 
  max-width: 100%; 
  max-height: 100%;
`;
