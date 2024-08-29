import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const WatchlistUI = () => {
  const location = useLocation();
  const [watchlist, setWatchlist] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('buy');
  const [selectedStock, setSelectedStock] = useState(null);
  const [quantity, setQuantity] = useState(1);

  var stockId=null;
  useEffect(() => {
    const addStockToStockTable = async (stock) => {
      if (stock && stock.instrumentKey && stock.name) { // Validate the stock object
        try {
          const response = await axios.post('http://localhost:8080/stocks/addstocks', {
            "instrumentKey": stock.instrumentKey,
            "name": stock.name
          },{
            headers:{ Authorization:sessionStorage.getItem('token')}
           });

          const response1 = await axios.post('http://localhost:8080/watchlist/add', {
            "email": "vedanttule134@gmail.com",
            "password": "ved321#",
            "stockId": response.data,
            "watchlistName": "MyWatchlist",
          },{
            headers:{ Authorization:sessionStorage.getItem('token')}
           });

          stockId=response.data;
          console.log('Stock added to stock table:', response.data);
          console.log('Stock added to watchList:', response1.data);
        } catch (error) {
          console.error('Error adding stock to backend:', error);
        }
      } else {
        console.error('Invalid stock data:', stock);
      }
    };
    
    if (location.state && location.state.stock) {
      addStockToStockTable(location.state.stock);
    }
    
    if (location.state && location.state.stock) {
      const newStock = location.state.stock;

      // Check if the stock is already in the watchlist
      const stockExists = watchlist.some(stock => stock.instrumentKey === newStock.instrumentKey);

      if (!stockExists) {
        setWatchlist(prevWatchlist => [...prevWatchlist, newStock]);
      }
    }
  }, [location.state, watchlist]);

  const handleRemoveFromWatchlist = (instrumentKey) => {
    const updatedWatchlist = watchlist.filter(stock => stock.instrumentKey !== instrumentKey);
    setWatchlist([...updatedWatchlist]);  // Ensure a new array is created and state is updated
  };

  const handleShowModal = (stock, type) => {
    setSelectedStock(stock);
    setModalType(type);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
    setQuantity(1);
  };

  const handleBuySell = () => {
    if (selectedStock) {
      const order = {
        "userEmail": 1,
        "stockID":1,
        "orderType":"BUY",
        "orderStatus":"COMPLETED",
        "quantity":quantity,
        "price": selectedStock.lastPrice * quantity
      };
      
      console.log(`${modalType === 'buy' ? 'Buying' : 'Selling'} ${quantity} of ${selectedStock.name}`);
      addOrder(order); // Pass the new order to the parent component
    }

    handleHideModal();
  };


  const addOrder = async (order) => {
    const response = await axios.post('http://localhost:8080/api/orders',
      order,{
        headers:{ Authorization:sessionStorage.getItem('token')}
       });
    console.log(response);
    //navigate('/watchlist', { state: { stock } });
  };

  const totalPrice = selectedStock ? (selectedStock.lastPrice * quantity).toFixed(2) : 0;

  return (
    <div>
      <div className="container mt-4">
        <h2>Watchlist</h2>
        <div className="list-group mt-3">
          {watchlist.map(stock => (
            <div key={stock.instrumentKey} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{stock.name}</span>
              <span>₹{stock.lastPrice}</span>
              <div>
                <button className="btn btn-success me-2" onClick={() => handleShowModal(stock, 'buy')}>Buy</button>
                <button className="btn btn-danger me-2" onClick={() => handleShowModal(stock, 'sell')}>Sell</button>
                <button className="btn btn-outline-danger" onClick={() => handleRemoveFromWatchlist(stock.instrumentKey)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'buy' ? 'Buy' : 'Sell'} {selectedStock?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </Form.Group>
            <Card>
              <Card.Body>
                <Card.Text>
                  Unit Price: ₹{selectedStock?.lastPrice}
                </Card.Text>
                <Card.Text>
                  Total Price: ₹{totalPrice}
                </Card.Text>
              </Card.Body>
            </Card>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>Close</Button>
          <Button variant="primary" onClick={handleBuySell}>{modalType === 'buy' ? 'Buy' : 'Sell'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WatchlistUI;
