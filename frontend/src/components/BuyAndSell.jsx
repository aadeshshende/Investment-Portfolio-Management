import { Button, Card, Form, Modal } from "react-bootstrap";
import BuyService from "../Service/BuyService";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const BuyAndSell = ({stock}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("BUY");
  const [selectedStock, setSelectedStock] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleShowModal = (stock, type) => {
    setSelectedStock(stock);
    setModalType(type);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
    setQuantity(1);
  };

  const totalPrice = selectedStock ? (selectedStock.lastPrice * quantity).toFixed(2) : 0;
  
  const handleBuySell = () => {
    if (selectedStock) {
      const order = {
        userEmail: "",
        stockID:1,
        "orderType":modalType,
        "orderStatus":"COMPLETED",
        "quantity":quantity,
        "price": selectedStock.lastPrice * quantity
      };
      
      console.log(`${modalType === 'BUY' ? 'Buying' : 'Selling'} ${quantity} of ${selectedStock.name}`);
       BuyService(order,stock).then(response => {
        toast.success(`ORDER ${modalType} SUCCESSFULL!`);
      })
      .catch(error => {
        toast.error(`Cannot ${modalType} at this time`);
      });// call buyService
    }

    handleHideModal();
  };
  return (
    <div>
      <div>
        <button
          className="btn btn-success me-2"
          onClick={() => handleShowModal(stock, "BUY")}
        >
          Buy
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={() => handleShowModal(stock, "SELL")}
        >
          Sell
        </button>
       
      </div>

      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "BUY" ? "Buy" : "Sell"} {selectedStock?.name}
          </Modal.Title>
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
                <Card.Text>Unit Price: ₹{selectedStock?.lastPrice}</Card.Text>
                <Card.Text>Total Price: ₹{totalPrice}</Card.Text>
              </Card.Body>
            </Card>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBuySell}>
            {modalType === "BUY" ? "Buy" : "Sell"}
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </div>
  );
};

export default BuyAndSell;
