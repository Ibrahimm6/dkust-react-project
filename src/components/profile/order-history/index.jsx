import React from "react";
import { FiBox, FiClock } from "react-icons/fi";
import PathConstants from "../../../routes/pathConstants";
import {
  SectionCard,
  CardHeader,
  CardTitle,
  OrdersList,
  OrderCard,
  OrderLeft,
  OrderLogoBox,
  OrderDetails,
  OrderTitle,
  OrderDate,
  OrderRight,
  OrderPrice,
  OrderStatusBadge,
  BrowseMoreButton,
} from "./styles";

const OrderHistory = ({ orders = [] }) => {
  return (
    <SectionCard>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>

      <OrdersList>
        {orders.map((order) => (
          <OrderCard key={order.id}>
            <OrderLeft>
              <OrderLogoBox>
                <FiBox size={18} />
              </OrderLogoBox>
              <OrderDetails>
                <OrderTitle>{order.name}</OrderTitle>
                <OrderDate>
                  <FiClock size={12} />
                  <span>{order.date}</span>
                </OrderDate>
              </OrderDetails>
            </OrderLeft>

            <OrderRight>
              <OrderPrice>${order.price}</OrderPrice>
              <OrderStatusBadge $isActive={order.status === "Active"}>
                {order.status}
              </OrderStatusBadge>
            </OrderRight>
          </OrderCard>
        ))}
      </OrdersList>

      <BrowseMoreButton to={PathConstants.PRODUCTS}>
        Browse More Products
      </BrowseMoreButton>
    </SectionCard>
  );
};

export default OrderHistory;