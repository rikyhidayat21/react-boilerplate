/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
// import messages from './messages';
import NavbarHome from '../../components/Navbar';
import SideBarButton from '../../components/SideBarButton';

export default function HomePage() {
  return (
    <>
      <NavbarHome />
      <Row>
        {/* sidebar */}
        <Col sm="2" className="border">
          <SideBarButton> SideBarButton </SideBarButton>
          <h5>hellow</h5>
          <h5>hellow</h5>
          <h5>hellow</h5>
          <h5>hellow</h5>
        </Col>
        {/* content */}
        <Col sm="10" className="bg-secondary">
          <h5>hellow content</h5>
        </Col>
      </Row>
    </>
  );
}
