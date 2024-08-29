import React, { useState } from 'react';
import WatchlistUI from './WatchlistUI';
import OrdersUI from './OrdersUI';

const MainPage = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div>
      <WatchlistUI addOrder={addOrder} />
      <OrdersUI orders={orders} />
    </div>
  );
};

export default MainPage;
