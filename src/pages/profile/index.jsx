import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import ProfileHero from "../../components/profile/hero-section";
import ProfileStats from "../../components/profile/stats-section";
import ProfileInfo from "../../components/profile/profile-info";
import OrderHistory from "../../components/profile/order-history";
import QuickActions from "../../components/profile/quick-actions";
import { PageWrapper, ContentContainer, TwoColumnGrid } from "./styles";
import {
  getProfile,
 updateProfile,
}from "../../services/profile/profile.service";
const initialOrders = [
  { id: 1, name: "AI Analytics Dashboard", date: "Sep 12, 2026", price: 299, status: "Active" },
  { id: 3, name: "DataSync Cloud", date: "Aug 01, 2026", price: 49, status: "Active" },
  { id: 6, name: "CyberShield VPN", date: "Jun 15, 2026", price: 79, status: "Expired" },
];

const toViewModel = (data)=>({
  fullName:`${data.firstName || ""} ${data.lastName || ""}`.trim(),
  email:data.email || "",
  phone : data.phone || "",
  location : data.location || "",
  bio : data.bio || "",
});

const splitName = (fullName = "")=>{
  const [firstName,...rest]=fullName.trim().split(/\s+/);
 return { firstName: firstName || "", lastName: rest.join(" ") };
};
const ProfilePage= () =>{
  const navigate = useNavigate();
  const [profile,setProfile] = useState(null);

  useEffect(()=>{
    const fetchProfile = async ()=>{
      const responsive = await getProfile();
      if(responsive?.status===200) setProfile(toViewModel(responsive.data));
      else navigate(PathConstants.LOGIN)
    };
    fetchProfile();
  },[navigate]);
  
  const handleUpdateProfile = async(values)=>{
    const {firstName,lastName} = splitName(values.fullName);
    const responsive = await updateProfile({
      firstName,
      lastName,
      phone:values.phone,
      location:values.location,
      bio:values.bio,
    });
    if(responsive?.status===200) setProfile(toViewModel(responsive.data));
  };
  if(!profile) return null;
  return (
    <AppTemplate pageTitle="Profile" path={PathConstants.PROFILE}>
      <PageWrapper>
        <ProfileHero fullName={profile.fullName} email={profile.email} />

        <ContentContainer>
          <ProfileStats ordersCount={initialOrders.length} />

          <TwoColumnGrid>
            <ProfileInfo profile={profile} onUpdateProfile={handleUpdateProfile} />
            <OrderHistory orders={initialOrders} />
          </TwoColumnGrid>

          <QuickActions />
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default ProfilePage;