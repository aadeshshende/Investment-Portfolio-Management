import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

const HoldingUI = () => {
  const [holding, setHoldings] = useState([]);

  const totalPrice = holding.reduce(
    (acc, data) => acc + data.averagePurchasePrice,
    0
  );

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
        `http://localhost:8080/api/portfolios/portfolios/${resID.data}`,
        {
          headers: { Authorization: token },
        }
      );
      console.log(response.data);
      setHoldings(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Portfolio</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {holding.map((data, index) => (
            <tr key={index}>
              <td>{data.stockName}</td>
              <td>{data.quantity}</td>
              <td>₹{data.averagePurchasePrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="text-right">
              <strong>Current value </strong>
            </td>
            <td style={{color:'green'}}>₹{totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default HoldingUI;
