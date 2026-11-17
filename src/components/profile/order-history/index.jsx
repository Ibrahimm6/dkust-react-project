import React from "react";
import { FiBox, FiClock } from "react-icons/fi";
import PathConstants from "../../../routes/pathConstants";
import {
  SectionCard,
  CardHeader,
  CardTitle,
  OrdersList,
  EmptyOrders,
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
      {orders.length > 0 ? (
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
                <OrderPrice>${Number(order.price).toLocaleString()}</OrderPrice>
                <OrderStatusBadge $isActive={order.isActive}>
                  {order.status}
                </OrderStatusBadge>
              </OrderRight>
            </OrderCard>
          ))}
        </OrdersList>
      ) : (
        <EmptyOrders>You haven't placed any orders yet.</EmptyOrders>
      )}
      <BrowseMoreButton to={PathConstants.PRODUCTS}>
        Browse More Products
      </BrowseMoreButton>
    </SectionCard>
  );
};

export default OrderHistory;