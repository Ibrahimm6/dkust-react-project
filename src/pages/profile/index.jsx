import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import ProfileHero from "../../components/profile/hero-section";
import ProfileStats from "../../components/profile/stats-section";
import OrderHistory from "../../components/profile/order-history";
import QuickActions from "../../components/profile/quick-actions";
import {
  PageWrapper,
  ContentContainer,
  TwoColumnGrid,
  ProfileCard,
  SectionTitle,
  PasswordTitle,
  PasswordForm,
  PasswordInput,
  FormMessage,
  SubmitButton,
} from "./styles";
import {
  getProfile,
  updateProfile,
} from "../../services/profile/profile.service";
import { updatePassword } from "../../services/auth/auth.service";

const initialOrders = [
  { id: 1, name: "AI Analytics Dashboard", date: "Sep 12, 2026", price: 299, status: "Active" },
  { id: 3, name: "DataSync Cloud", date: "Aug 01, 2026", price: 49, status: "Active" },
  { id: 6, name: "CyberShield VPN", date: "Jun 15, 2026", price: 79, status: "Expired" },
];

const FIELDS = [
  { key: "fullName", label: "Full Name" },
  { key: "email", label: "Email", readOnly: true },
  { key: "phone", label: "Phone" },
  { key: "location", label: "Location" },
  { key: "bio", label: "Bio", multiline: true },
];

const toViewModel = (data) => ({
  fullName: `${data.firstName || ""} ${data.lastName || ""}`.trim(),
  email: data.email || "",
  phone: data.phone?.trim() || "",
  location: data.location?.trim() || "",
  bio: data.bio?.trim() || "",
});

const splitName = (fullName = "") => {
  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  return { firstName: firstName || "", lastName: rest.join(" ") };
};

const EditableField = ({ value, onSave, multiline, readOnly, placeholder }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  const commit = () => {
    setEditing(false);
    if (draft !== value) onSave(draft);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !multiline) e.target.blur();
    if (e.key === "Escape") {
      setDraft(value);
      setEditing(false);
    }
  };

  if (readOnly || !editing) {
    return (
      <span
        onClick={() => !readOnly && setEditing(true)}
        style={{
          display: "block",
          minHeight: "24px",
          cursor: readOnly ? "default" : "text",
          color: value ? "#111827" : "#9ca3af",
        }}
      >
        {value || placeholder}
      </span>
    );
  }

  const Tag = multiline ? "textarea" : "input";
  return (
    <Tag
      autoFocus
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={handleKeyDown}
      style={{
        width: "100%",
        padding: "6px 8px",
        border: "1px solid #00a651",
        borderRadius: "6px",
        font: "inherit",
        outline: "none",
      }}
    />
  );
};

const UpdatePassword = () => {
  const [form, setForm] = useState({ current: "", next: "", confirm: "" });
  const [message, setMessage] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    if (form.next.length < 8)
      return setMessage({ error: true, text: "Password must be at least 8 characters" });
    if (form.next !== form.confirm)
      return setMessage({ error: true, text: "Passwords do not match" });
    if (form.next === form.current)
      return setMessage({ error: true, text: "New password must be different" });

    setSaving(true);
    try {
      const res = await updatePassword({
        currentPassword: form.current,
        newPassword: form.next,
      });
      if ([200, 201, 204].includes(res?.status)) {
        setMessage({ error: false, text: res?.data?.message || "Password updated" });
        setForm({ current: "", next: "", confirm: "" });
      } else {
        const serverMsg = res?.data?.message || res?.data?.error || `Status ${res?.status}`;
        setMessage({ error: true, text: `Could not update password: ${serverMsg}` });
      }
    } catch (err) {
      const serverMsg = err?.response?.data?.message || err?.message || "Unknown error";
      setMessage({ error: true, text: `Could not update password: ${serverMsg}` });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f3f4f6" }}>
      <PasswordTitle>Update Password</PasswordTitle>
      <PasswordForm onSubmit={handleSubmit}>
        <PasswordInput
          type="password"
          name="current"
          placeholder="Current Password"
          value={form.current}
          onChange={handleChange}
          required
        />
        <PasswordInput
          type="password"
          name="next"
          placeholder="New Password"
          value={form.next}
          onChange={handleChange}
          required
        />
        <PasswordInput
          type="password"
          name="confirm"
          placeholder="Confirm New Password"
          value={form.confirm}
          onChange={handleChange}
          required
        />
        {message && (
          <FormMessage $error={message.error}>{message.text}</FormMessage>
        )}
        <SubmitButton type="submit" disabled={saving}>
          {saving ? "Saving..." : "Update Password"}
        </SubmitButton>
      </PasswordForm>
    </div>
  );
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getProfile();
      if (res?.status === 200) setProfile(toViewModel(res.data));
      else navigate(PathConstants.LOGIN);
    };
    fetchProfile();
  }, [navigate]);

  const handleSave = async (key, newValue) => {
    const updated = { ...profile, [key]: newValue };
    const { firstName, lastName } = splitName(updated.fullName);
    const res = await updateProfile({
      firstName,
      lastName,
      phone: updated.phone,
      location: updated.location,
      bio: updated.bio,
    });
    if (res?.status === 200) setProfile(toViewModel(res.data));
  };

  if (!profile) return null;

  return (
    <AppTemplate pageTitle="Profile" path={PathConstants.PROFILE}>
      <PageWrapper>
        <ProfileHero fullName={profile.fullName} email={profile.email} />
        <ContentContainer>
          <ProfileStats ordersCount={initialOrders.length} />
          <TwoColumnGrid>
            <ProfileCard>
              <SectionTitle>Profile Info</SectionTitle>
              {FIELDS.map(({ key, label, readOnly, multiline }) => (
                <div key={key} style={{ marginBottom: "18px" }}>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#9ca3af",
                      marginBottom: "4px",
                    }}
                  >
                    {label}
                  </div>
                  <EditableField
                    value={profile[key]}
                    readOnly={readOnly}
                    multiline={multiline}
                    placeholder="Click to add"
                    onSave={(v) => handleSave(key, v)}
                  />
                </div>
              ))}
              <UpdatePassword />
            </ProfileCard>
            <OrderHistory orders={initialOrders} />
          </TwoColumnGrid>
          <QuickActions />
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default ProfilePage;