import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { HeroSection, AvatarCircle, HeroName, HeroEmail, VerifiedBadge } from "./styles";

const ProfileHero = ({ fullName, email }) => {
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <HeroSection>
      <AvatarCircle>{getInitials(fullName)}</AvatarCircle>
      <HeroName>{fullName}</HeroName>
      <HeroEmail>{email}</HeroEmail>
      <VerifiedBadge>
        <FiCheckCircle size={13} />
        <span>Verified Member</span>
      </VerifiedBadge>
    </HeroSection>
  );
};

export default ProfileHero;