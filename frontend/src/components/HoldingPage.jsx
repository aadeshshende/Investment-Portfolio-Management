// src/HoldingsPage.js

import React from "react";
import CustomNavbar from "./Navbar";
import StockList from "./StockList";
import HoldingUI from "./HoldingsUI"
import { Container, Row, Col } from "react-bootstrap"; // Import Container, Row, and Col

const HoldingsPage = () => {
  

  return (
    <div>
      <Container fluid className="p-3">
        <Row>
          <Col md={4}>
            <StockList />
          </Col>
          <Col md={8}>
            <CustomNavbar />
            <HoldingUI />
          </Col>
        </Row >
      </Container>
    </div>
  );
};

export default HoldingsPage;
