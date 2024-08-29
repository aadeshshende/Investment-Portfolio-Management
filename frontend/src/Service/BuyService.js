import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BuyService = async (order,stock) => {
  const token = sessionStorage.getItem("token");

  try {
    // Decode the token
    const decodedToken = jwtDecode(token);

    // Extract email from the decoded token
    // Note: Adjust the field name based on your token structure
    order["userEmail"] = decodedToken.sub;

  } catch (error) {
    console.error("Invalid token", error);
  }

  const idRes = await axios.post(
    "http://localhost:8080/stocks/addstocks",
    {
      "instrumentKey": stock.instrumentKey,
      "name": stock.name,
    },
    {
      headers: { Authorization: token },
    }
  );
console.log(idRes);
  order["stockID"] = idRes.data;
  const response = await axios.post("http://localhost:8080/api/orders", order, {
    headers: { Authorization: token },
  });

  return response;
};

export default BuyService;
