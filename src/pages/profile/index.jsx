import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppTemplate from "../../components/app-template";
import MainLoader from "../../components/main-loader";
import PathConstants from "../../routes/pathConstants";
import ProfileHero from "../../components/profile/hero-section";
import ProfileStats from "../../components/profile/stats-section";
import ProfileInfo from "../../components/profile/profile-info";
import UpdatePassword from "../../components/profile/update-password";
import OrderHistory from "../../components/profile/order-history";
import QuickActions from "../../components/profile/quick-actions";
import {
  PageWrapper,
  ContentContainer,
  TwoColumnGrid,
} from "./styles";
import {
  getProfile,
  updateProfile,
} from "../../services/profile/profile.service";

const initialOrders = [
  { id: 1, name: "AI Analytics Dashboard", date: "Sep 12, 2026", price: 299, status: "Active" },
  { id: 3, name: "DataSync Cloud", date: "Aug 01, 2026", price: 49, status: "Active" },
  { id: 6, name: "CyberShield VPN", date: "Jun 15, 2026", price: 79, status: "Expired" },
];

const toViewModel = (data) => ({
  fullName: `${data?.firstName || ""} ${data?.lastName || ""}`.trim(),
  email: data?.email || "",
  phone: data?.phone?.trim() || "",
  location: data?.location?.trim() || "",
  bio: data?.bio?.trim() || "",
});

const splitName = (fullName = "") => {
  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  return { firstName: firstName || "", lastName: rest.join(" ") };
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const res = await getProfile();
      if (res?.status === 200 && res.data) {
        setProfile(toViewModel(res.data));
      } else {
        navigate(PathConstants.LOGIN);
      }
      setLoading(false);
    };
    fetchProfile();
  }, [navigate]);

  const handleUpdateProfile = async (updatedForm) => {
    const { firstName, lastName } = splitName(updatedForm.fullName);
    const res = await updateProfile({
      firstName,
      lastName,
      phone: updatedForm.phone,
      location: updatedForm.location,
      bio: updatedForm.bio,
    });

    if (res?.status === 200) {
      setProfile((prev) => ({
        ...prev,
        ...toViewModel(res.data || updatedForm),
        email: res.data?.email || prev.email,
      }));
      return true;
    }
    return false;
  };

  return (
    <AppTemplate pageTitle="Profile" path={PathConstants.PROFILE}>
      <PageWrapper>
        {loading || !profile ? (
          <MainLoader />
        ) : (
          <>
            <ProfileHero fullName={profile.fullName} email={profile.email} />
            <ContentContainer>
              <ProfileStats ordersCount={initialOrders.length} />
              <TwoColumnGrid>
                <ProfileInfo
                  profile={profile}
                  onUpdateProfile={handleUpdateProfile}
                />
                <OrderHistory orders={initialOrders} />
                <UpdatePassword />
                <QuickActions />
              </TwoColumnGrid>
            </ContentContainer>
          </>
        )}
      </PageWrapper>
    </AppTemplate>
  );
};

export default ProfilePage;