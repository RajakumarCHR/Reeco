import React from "react";
import Header from "./Header";
import OrderHeader from "./OrderHeader";
import OrderDashBoard from "./OrderDashBoard";

const OrderDetails = ({ orderData }) => {
  return (
    <div>
      <Header orderId={orderData.orderId} />
      <OrderHeader orderData={orderData} />
      <OrderDashBoard />
    </div>
  );
};

export default OrderDetails;
