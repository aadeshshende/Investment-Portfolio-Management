import React from 'react'; 
import { Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from './Navbar';
import StockList from './StockList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';

const AboutUsUI = () => {

  return (
    <div>
      <Container fluid className="p-3">
        <Row>
        <Col md={4}>
            <StockList/>
        </Col>
        <Col md={8}>
            <CustomNavbar />
            <AboutUs />
          </Col>  
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsUI;