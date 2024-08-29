import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const DashboardUI = () => {
  const [fundsData, setFundsData] = useState({
    availableFunds: 0,
    availableMargin: 0,
    usedMargin: 0,
    openingBalance: 0,
  });

  const token = sessionStorage.getItem('token');
  
  useEffect(() => {
    const fetchFundsData = async () => {
      try {
        // Replace with your API endpoint to fetch funds data
        const response = await axios.get('/api/funds', {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        setFundsData(response.data);
      } catch (error) {
        console.error('Error fetching funds data:', error);
      }
    };

    fetchFundsData();
  }, [token]);

  const data = [
    { name: 'Equity', value: fundsData.availableFunds },
    { name: 'Commodity', value: 0 }, // Add relevant values if available
    { name: 'Holdings', value: 65200 }, // Example holding value
    { name: 'P&L', value: 1690 }, // Example P&L value
  ];

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Hi, {jwtDecode(token).sub}</h4>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <h5>Equity</h5>
              <div className="d-flex justify-content-between">
                <h2>{fundsData.availableFunds.toFixed(2)}</h2>
                <div className="text-right">
                  <p>Margin available: {fundsData.availableMargin.toFixed(2)}</p>
                  <p>Margins used: {fundsData.usedMargin.toFixed(2)}</p>
                  <p>Opening balance: {fundsData.openingBalance.toFixed(2)}</p>
                  <a href="#">View statement</a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <h5>Commodity</h5>
              <div className="d-flex justify-content-between">
                <h2>0</h2> {/* Update if commodity data is available */}
                <div className="text-right">
                  <p>Margin available</p>
                  <p>Margins used: 0</p>
                  <p>Opening balance: 0</p>
                  <a href="#">View statement</a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <h5>Holdings (5)</h5>
              <h2>
                1.69k <Badge bg="success">+2.54%</Badge>
              </h2>
              <p>P&L</p>
              <p>Current value: 68.21k</p> {/* Update with real data */}
              <p>Investment: 66.52k</p> {/* Update with real data */}
            </Col>
            <Col md={6}>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashboardUI;
