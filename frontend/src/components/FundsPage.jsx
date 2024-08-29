import React from 'react';
import CustomNavbar from './Navbar';
import StockList from './StockList';
import BankAndFundManagementPage  from './BankAndFundManagementPage ';
import { Container, Row, Col } from 'react-bootstrap';
import './FundsPage.css';
import FundsUI from './FundsUI';

const FundsPage = () => {
  return (
    <div className="WatchlistPage">
      <Container fluid className="p-3">
        <Row>
        <Col md={4}>
            <StockList/>
        </Col>
        <Col md={8}>
            <CustomNavbar />
            <BankAndFundManagementPage  />
            
              <FundsUI />

          </Col>  
        </Row>
      </Container>
    </div>
  );
};

export default FundsPage;
