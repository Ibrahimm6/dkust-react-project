import React from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiPackage,
  FiHelpCircle,
} from "react-icons/fi";
import PathConstants from "../../../routes/pathConstants";
import {
  SectionCard,
  CardHeader,
  CardTitle,
  QuickActionsGrid,
  QuickActionButton,
} from "./styles";

const actions = [
  {
    id: 1,
    label: "View Cart",
    path: PathConstants.CART,
    icon: <FiShoppingCart size={18} />,
  },
  {
    id: 2,
    label: "Favorites",
    path: PathConstants.WISHLIST,
    icon: <FiHeart size={18} />,
  },
  {
    id: 3,
    label: "Browse Products",
    path: PathConstants.PRODUCTS,
    icon: <FiPackage size={18} />,
  },
  {
    id: 4,
    label: "Take Quiz",
    path: PathConstants.QUIZ,
    icon: <FiHelpCircle size={18} />,
  },
];

const QuickActions = () => {
  return (
    <SectionCard>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <QuickActionsGrid>
        {actions.map((action) => (
          <QuickActionButton key={action.id} to={action.path}>
            {action.icon}
            <span>{action.label}</span>
          </QuickActionButton>
        ))}
      </QuickActionsGrid>
    </SectionCard>
  );
};

export default QuickActions;