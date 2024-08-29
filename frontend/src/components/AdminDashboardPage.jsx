import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AdminDashboard.css'; // Create this file for custom styling

const AdminDashboardPage = () => {
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
        <img src="default-monochrome.svg" alt="logo" style={{ width: '200px', height: '150px' }} />
      </div>
    <Container fluid className="admin-dashboard">
      <Row className="mb-4">
        <Col>
          <h2 className="dashboard-title">Admin Dashboard</h2>
        </Col>
      </Row>
      <Row>
        {/* Stock Listing Section */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Stock Listing</Card.Title>
              <Card.Text>
                Manage stocks by adding new stocks or updating existing ones.
              </Card.Text>
              <Button variant="primary" className="w-100">Manage Stocks</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* User Details Section */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>User Details</Card.Title>
              <Card.Text>
                View user details and remove unauthorized users from the platform.
              </Card.Text>
              <Button variant="warning" className="w-100">Manage Users</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Help and Support Section */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Help and Support</Card.Title>
              <Card.Text>
                Assist users with their issues and manage support requests for them.
              </Card.Text>
              <Button variant="info" className="w-100">Help & Support</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AdminDashboardPage;
