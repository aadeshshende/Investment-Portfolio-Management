import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem, Badge, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/stocks/search/${search}`,{
         headers:{ Authorization:sessionStorage.getItem('token')}
        });
        setStocks(response.data);
        //console.log(response.data);
        console.log(search);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    if (search) {
      fetchStocks();
    } else {
      setStocks([]);
    }
  }, [search]);

  const addToWatchlist = (stock) => {
    navigate('/watchlist', { state: { stock } });
  };

  const onStockClick= (stock) => {
    navigate('/stockdetails',{ state: { stock } });
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Card className="flex-grow-1 d-flex flex-column bg-light text-dark border-0">
        <Card.Header className="bg-white text-white">
          <Form.Control
            type="text"
            placeholder="Search stocks..."
            className="mt-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Card.Header>
        <Card.Body className="d-flex flex-column">
          <div className="flex-grow-1 overflow-auto" style={{ maxHeight: 'calc(80vh - 0px)' }}>
            <ListGroup variant="flush">
              {stocks.length > 0 ? (
                stocks.map((stock, index) => (
                  <ListGroupItem 
                    key={index} 
                    className="d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: '#f8f9fa', cursor: 'pointer' }}
                    onClick={() => onStockClick(stock)} 
                  >
                    <span>{stock.name}</span>
                    <div className="d-flex align-items-center">
                      <Badge bg="light" text="success" className="me-3 fs-6 fw-bold">₹{stock.lastPrice}</Badge>
                      <Button 
                        variant="success" 
                        size="sm" 
                        style={{ width: '50px',backgroundColor:'#4184f3'}}
                        onClick={(e) => {
                          e.stopPropagation(); 
                          addToWatchlist(stock);
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </ListGroupItem>
                ))
              ) : (
                <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}>No stocks found</ListGroupItem>
              )}
            </ListGroup>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

StockList.propTypes = {
  onStockClick: PropTypes.func.isRequired,
};

export default StockList;
