import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2 } from "react-icons/fi";
import { ProfileInfoWrapper } from "./styles";

const ProfileInfo = ({ profile, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleToggleEdit = () => {
    setFormData(profile);
    setErrorMsg("");
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg("");
    const success = await onUpdateProfile(formData);
    setSaving(false);

    if (success) {
      setIsEditing(false);
    } else {
      setErrorMsg("Failed to update profile. Please try again.");
    }
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "text", icon: <FiUser size={16} /> },
    { name: "email", label: "Email", type: "email", icon: <FiMail size={16} />, readOnly: true },
    { name: "phone", label: "Phone", type: "text", icon: <FiPhone size={16} /> },
    { name: "location", label: "Location", type: "text", icon: <FiMapPin size={16} /> },
  ];

  return (
    <ProfileInfoWrapper>
      <div className="card-header">
        <h3>Profile Info</h3>
        <button
          type="button"
          className="edit-btn"
          onClick={handleToggleEdit}
          disabled={saving}
        >
          <FiEdit2 size={14} />
          <span>{isEditing ? "Cancel" : "Edit"}</span>
        </button>
      </div>

      {isEditing ? (
        <form className="edit-form" onSubmit={handleSave}>
          {fields.map((field, index) => (
            <div className="form-group" key={field.name}>
              <label htmlFor={`profile-${field.name}`}>{field.label}</label>
              <input
                id={`profile-${field.name}`}
                name={field.name}
                type={field.type}
                value={formData[field.name] || ""}
                onChange={handleChange}
                disabled={field.readOnly || saving}
                autoFocus={index === 0}
              />
            </div>
          ))}

          <div className="form-group">
            <label htmlFor="profile-bio">Bio</label>
            <textarea
              id="profile-bio"
              name="bio"
              rows={3}
              value={formData.bio || ""}
              onChange={handleChange}
              disabled={saving}
            />
          </div>

          {errorMsg && <p className="status-msg">{errorMsg}</p>}

          <button type="submit" className="save-btn" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      ) : (
        <>
          <div className="info-list">
            {fields.map((field) => {
              const value = profile[field.name];
              return (
                <div className="info-item" key={field.name}>
                  <div className="icon-circle">{field.icon}</div>
                  <div className="text-group">
                    <span className="info-label">{field.label}</span>
                    <span
                      className="info-value"
                      style={{
                        color: value ? "var(--color-text-dark)" : "#9ca3af",
                        fontStyle: value ? "normal" : "italic",
                      }}
                    >
                      {value || "Not provided"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bio-wrapper">
            <span className="info-label">Bio</span>
            <p className={!profile.bio ? "empty" : ""}>
              {profile.bio || "No bio added yet."}
            </p>
          </div>
        </>
      )}
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;