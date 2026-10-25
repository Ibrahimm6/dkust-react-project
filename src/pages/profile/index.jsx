import React, { useState } from "react";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import ProfileHero from "../../components/profile/hero-section";
import ProfileStats from "../../components/profile/stats-section";
import ProfileInfo from "../../components/profile/profile-info";
import OrderHistory from "../../components/profile/order-history";
import QuickActions from "../../components/profile/quick-actions";
import { PageWrapper, ContentContainer, TwoColumnGrid } from "./styles";

const initialOrders = [
  { id: 1, name: "AI Analytics Dashboard", date: "Sep 12, 2026", price: 299, status: "Active" },
  { id: 3, name: "DataSync Cloud", date: "Aug 01, 2026", price: 49, status: "Active" },
  { id: 6, name: "CyberShield VPN", date: "Jun 15, 2026", price: 79, status: "Expired" },
];

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 555 234 9876",
    location: "New York, USA",
    bio: "Full-stack developer and tech enthusiast. Love exploring new tools.",
  });

  return (
    <AppTemplate pageTitle="Profile" path={PathConstants.PROFILE}>
      <PageWrapper>
        <ProfileHero fullName={profile.fullName} email={profile.email} />

        <ContentContainer>
          <ProfileStats ordersCount={initialOrders.length} />

          <TwoColumnGrid>
            <ProfileInfo profile={profile} onUpdateProfile={setProfile} />
            <OrderHistory orders={initialOrders} />
          </TwoColumnGrid>

          <QuickActions />
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default ProfilePage;