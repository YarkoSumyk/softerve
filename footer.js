import React from 'react';

import { Row, Card, Col } from 'react-bootstrap';

function Footer(props) {
  return (
    <footer>
      <Card bg="light" style={{ width: '100%', margin: '0' }}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Footer</Card.Title>
            </Col>
            <Col>
              <Card.Title>Links</Card.Title>
              <Card.Link href="#">Telegram</Card.Link>
              <Card.Link href="#">Instagram</Card.Link>
              <Card.Link href="#">Facebook</Card.Link>
            </Col>
          </Row>
        </Card.Body>
        <Card.Header>© 2020 Fashion Note</Card.Header>
      </Card>
    </footer>
  );
}

export default Footer;
