import React from "react";
import { Card } from "react-bootstrap";
import StockGraph from "./StockGraph";
import { useLocation, useParams } from "react-router-dom";
import BuyAndSell from "./BuyAndSell";
// You can use a charting library like Chart.js, Recharts, etc., for the graphs.

const StockDetails = () => {
  const location = useLocation();
  console.log(location.state.stock);
  return (
    <div>
      <Card className="flex-grow-1 d-flex flex-column bg-light text-dark border-0">
        <Card.Header className="bg-white text-dark">
          <h4>{location.state.stock.name}</h4>
        </Card.Header>
        <Card.Body>
          <StockGraph ikey={location.state.stock.instrumentKey} />
        </Card.Body>
      </Card>
      <div>
      <BuyAndSell stock={location.state.stock}/>
      </div>
    </div>
  );
};

export default StockDetails;
