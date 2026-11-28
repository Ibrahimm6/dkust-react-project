import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";
import { ProfileSkeleton } from "../../components/common/skeleton";
import PathConstants from "../../routes/pathConstants";
import ProfileHero from "../../components/profile/hero-section";
import ProfileStats from "../../components/profile/stats-section";
import ProfileInfo from "../../components/profile/profile-info";
import UpdatePassword from "../../components/profile/update-password";
import OrderHistory from "../../components/profile/order-history";
import QuickActions from "../../components/profile/quick-actions";
import { getLocalizedText } from "../../helpers/product.helpers";
import { PageWrapper, ContentContainer, TwoColumnGrid } from "./styles";
import {
  getProfile,
  updateProfile,
} from "../../services/profile/profile.service";
import { getOrders } from "../../services/orders/orders.service";

const toViewModel = (data) => ({
  id: data?.id,
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

const mapOrderData = (order, lang = "en") => {
  const statusEn =
    typeof order.status === "string" ? order.status : order.status?.en || "";
  return {
    id: order.id,
    orderNumber: order.orderNumber || "",
    name:
      getLocalizedText(order.product, lang) || `Product #${order.productId}`,
    date: order.date || "",
    price: order.amount ?? order.price ?? 0,
    status: getLocalizedText(order.status, lang) || "Active",
    isActive: statusEn.toLowerCase() === "active",
  };
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n?.language || "en";

  const [profile, setProfile] = useState(null);
  const [rawOrders, setRawOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileAndOrders = async () => {
      setLoading(true);
      const res = await getProfile();
      if (res?.status === 200 && res.data) {
        const vm = toViewModel(res.data);
        setProfile(vm);

        const ordersRes = await getOrders(vm.id);
        if (ordersRes?.status === 200 && Array.isArray(ordersRes.data)) {
          setRawOrders(ordersRes.data);
        }
      } else {
        navigate(PathConstants.LOGIN);
      }
      setLoading(false);
    };
    fetchProfileAndOrders();
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
        id: res.data?.id ?? prev.id,
        email: res.data?.email || prev.email,
      }));
      return true;
    }
    return false;
  };

  const orders = rawOrders.map((order) => mapOrderData(order, lang));

  return (
    <AppTemplate pageTitle="Profile" path={PathConstants.PROFILE}>
      <PageWrapper>
        {loading || !profile ? (
          <ProfileSkeleton />
        ) : (
          <>
            <ProfileHero fullName={profile.fullName} email={profile.email} />
            <ContentContainer>
              <ProfileStats ordersCount={orders.length} />
              <TwoColumnGrid>
                <ProfileInfo
                  profile={profile}
                  onUpdateProfile={handleUpdateProfile}
                />
                <OrderHistory orders={orders} />
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