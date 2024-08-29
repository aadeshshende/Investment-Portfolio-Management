import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode
import axios from "axios";

const OrdersUI = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // get Token from session
    const token = sessionStorage.getItem("token");
    // Decode the JWT token to get the email
    const decodedToken = jwtDecode(token);
    const eMail = decodedToken.sub; // 'sub' contains the email

    console.log(eMail);
    // Fetch orders from the backend
    const fetchOrders = async () => {
      //fetch userId first by email
      const resID = await axios.get(
        `http://localhost:8080/user/userIdByEmail/`,
        {
          params: { email: eMail },
          headers: { Authorization: token }, 
        }
      );

      console.log(resID.data);
      //fetch from Trade History
      const response = await axios.get(
        `http://localhost:8080/api/tradeHistories/user/${resID.data}`,
        {
          headers: { Authorization: token },
        }
      );
      console.log(response.data);
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Orders/Transactions History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.stockName}</td>
              <td>₹{order.priceAtTransaction.toFixed(2)}</td>
              <td>{order.quantity}</td>
              <td>₹{order.transactionType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrdersUI;
