import React, { useState } from 'react';
import { Container, Card, Button, Form, Modal, Row, Col } from 'react-bootstrap';

const FundsUI = () => {
  const [availableFunds, setAvailableFunds] = useState(10000); // Initial available funds
  const [availableMargin, setAvailableMargin] = useState(5000); // Initial available margin
  const [usedMargin, setUsedMargin] = useState(2000); // Initial used margin
  const [usedCash, setUsedCash] = useState(3000); // Initial used cash
  const [showAddModal, setShowAddModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleAddFunds = () => {
    setAvailableFunds(availableFunds + parseFloat(amount));
    setShowAddModal(false);
    setAmount(0);
  };

  const handleWithdrawFunds = () => {
    if (amount <= availableFunds) {
      setAvailableFunds(availableFunds - parseFloat(amount));
      setShowWithdrawModal(false);
      setAmount(0);
    } else {
      alert("Insufficient funds to withdraw!");
    }
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Funds Summary</Card.Title>
          <Row>
            <Col>
              <Card.Text><strong>Available Funds:</strong> ₹{availableFunds.toFixed(2)}</Card.Text>
              <Card.Text><strong>Available Margin:</strong> ₹{availableMargin.toFixed(2)}</Card.Text>
            </Col>
            <Col>
              <Card.Text><strong>Used Margin:</strong> ₹{usedMargin.toFixed(2)}</Card.Text>
              <Card.Text><strong>Used Cash:</strong> ₹{usedCash.toFixed(2)}</Card.Text>
            </Col>
          </Row>
          <Button variant="success" onClick={() => setShowAddModal(true)}>Add Funds</Button>{' '}
          <Button variant="danger" onClick={() => setShowWithdrawModal(true)}>Withdraw Funds</Button>
        </Card.Body>
      </Card>

      {/* Add Funds Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Funds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="addFundsAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Enter amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
          <Button variant="success" onClick={handleAddFunds}>Add Funds</Button>
        </Modal.Footer>
      </Modal>

      {/* Withdraw Funds Modal */}
      <Modal show={showWithdrawModal} onHide={() => setShowWithdrawModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Withdraw Funds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="withdrawFundsAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Enter amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowWithdrawModal(false)}>Close</Button>
          <Button variant="danger" onClick={handleWithdrawFunds}>Withdraw Funds</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FundsUI;
