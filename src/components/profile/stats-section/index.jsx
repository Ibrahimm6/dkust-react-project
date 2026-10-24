import React from "react";
import { FiShoppingCart, FiHeart, FiPackage, FiBell } from "react-icons/fi";
import { useWishlist } from "../../../contexts/wishlistContext";
import { StatsGrid, StatCard, StatIconWrapper, StatInfo, StatNumber, StatLabel } from "./styles";

const ProfileStats = ({ ordersCount = 0 }) => {
  const { wishlist } = useWishlist();

  const statsData = [
    { id: 1, label: "Cart Items", value: 0, icon: <FiShoppingCart size={18} />, bg: "#eff6ff", color: "#3b82f6" },
    { id: 2, label: "Favorites", value: wishlist.length, icon: <FiHeart size={18} />, bg: "#fff1f2", color: "#f43f5e" },
    { id: 3, label: "Orders", value: ordersCount, icon: <FiPackage size={18} />, bg: "#f0fdf4", color: "#00a651" },
    { id: 4, label: "Notifications", value: 3, icon: <FiBell size={18} />, bg: "#fefce8", color: "#eab308" },
  ];

  return (
    <StatsGrid>
      {statsData.map((stat) => (
        <StatCard key={stat.id}>
          <StatIconWrapper $bg={stat.bg} $color={stat.color}>
            {stat.icon}
          </StatIconWrapper>
          <StatInfo>
            <StatNumber>{stat.value}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatInfo>
        </StatCard>
      ))}
    </StatsGrid>
  );
};

export default ProfileStats;