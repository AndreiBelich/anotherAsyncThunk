import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <Container fluid className="border border-primary">
        <Row className="border border-secondary mx-6">
          <Col className="border border-success">Logo</Col>
          <Col>NavMenu</Col>
        </Row>
        <Row className="border border-danger bg-warning">
          <Col>Logo</Col>
          <Col>NavMenu</Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
