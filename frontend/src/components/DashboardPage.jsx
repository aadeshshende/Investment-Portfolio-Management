import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StockList from './StockList'; 
import WatchlistPage from './WatchlistPage';
import CustomNavbar from './Navbar';
import DashboardUI from './DashboardUI';
import StockDetails from './StockDetails'; 

const DashboardPage = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleAddToWatchlist = (stock) => {
    if (!watchlist.some(item => item.name === stock.name)) {
      setWatchlist(prevWatchlist => [...prevWatchlist, stock]);
    }
  };

  const handleRemoveFromWatchlist = (stockName) => {
    setWatchlist(prevWatchlist => prevWatchlist.filter(stock => stock.name !== stockName));
  };

  const handleStockClick = (stock) => {
    setSelectedStock(stock); // Set the selected stock when clicked
  };

  return (
    <div className="dashboard-page">
      <Container fluid className="p-3">
        <Row>
          <Col md={4}>
            <StockList 
              onAddToWatchlist={handleAddToWatchlist} 
              onStockClick={handleStockClick}  // Pass handleStockClick here
            />
          </Col>
          <Col md={8}>
            <CustomNavbar />
            <DashboardUI />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
