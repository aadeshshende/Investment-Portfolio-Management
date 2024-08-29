import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from './Navbar';
import StockList from './StockList';
import OrdersUI from './OrdersUI';
import 'bootstrap/dist/css/bootstrap.min.css';

const Orders = () => {
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   // Replace with your API call
  //   fetch('/api/orders')
  //     .then(response => response.json())
  //     .then(data => setOrders(data));
  // }, []);

  return (
    <div className="OrdersPage">
      <Container fluid className="p-3">
        <Row>
        <Col md={4}>
            <StockList/>
        </Col>
        <Col md={8}>
            <CustomNavbar />
            <OrdersUI />
          </Col>  
        </Row>
      </Container>
    </div>
  );
};

export default Orders;
