import React, { useState, useEffect, useRef } from "react";
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2 } from "react-icons/fi";
import { ProfileInfoWrapper } from "./styles";

const EditableField = ({
  value,
  onSave,
  multiline = false,
  readOnly = false,
  required = false,
  placeholder = "Click to add",
}) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || "");
  const [saving, setSaving] = useState(false);
  const cancelledRef = useRef(false);

  useEffect(() => {
    setDraft(value || "");
  }, [value]);

  const startEditing = () => {
    if (readOnly || saving) return;
    cancelledRef.current = false;
    setDraft(value || "");
    setEditing(true);
  };

  const commit = async () => {
    if (cancelledRef.current) {
      cancelledRef.current = false;
      return;
    }

    const trimmed = draft.trim();
    const current = (value || "").trim();

    if (trimmed === current || (required && !trimmed)) {
      setDraft(value || "");
      setEditing(false);
      return;
    }

    setSaving(true);
    await onSave(trimmed);
    setSaving(false);
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault();
      e.currentTarget.blur();
    }
    if (e.key === "Escape") {
      cancelledRef.current = true;
      setDraft(value || "");
      setEditing(false);
    }
  };

  if (readOnly || !editing) {
    const isEmpty = !value || !value.trim();
    return (
      <div
        className={`field-display ${isEmpty ? "empty" : ""} ${
          readOnly ? "readonly" : ""
        }`}
        onClick={startEditing}
      >
        <span>{isEmpty ? placeholder : value}</span>
        {!readOnly && <FiEdit2 size={13} className="inline-edit-icon" />}
      </div>
    );
  }

  const Tag = multiline ? "textarea" : "input";

  return (
    <Tag
      className="field-input"
      autoFocus
      rows={multiline ? 3 : undefined}
      value={draft}
      disabled={saving}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={handleKeyDown}
    />
  );
};

const ProfileInfo = ({ profile, onUpdateProfile }) => {
  const [isEditingAll, setIsEditingAll] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [savingAll, setSavingAll] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleToggleEditAll = () => {
    setFormData(profile);
    setErrorMsg("");
    setIsEditingAll((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAll = async (e) => {
    e.preventDefault();
    if (!formData.fullName?.trim()) {
      setErrorMsg("Full name is required.");
      return;
    }

    setSavingAll(true);
    setErrorMsg("");
    const success = await onUpdateProfile({
      ...formData,
      fullName: formData.fullName.trim(),
      phone: (formData.phone || "").trim(),
      location: (formData.location || "").trim(),
      bio: (formData.bio || "").trim(),
    });
    setSavingAll(false);

    if (success) {
      setIsEditingAll(false);
    } else {
      setErrorMsg("Failed to update profile. Please try again.");
    }
  };

  const handleFieldSave = async (key, newValue) => {
    setErrorMsg("");
    const success = await onUpdateProfile({
      ...profile,
      [key]: newValue,
    });

    if (!success) {
      setErrorMsg("Failed to update profile. Please try again.");
    }
    return success;
  };

  const fields = [
    {
      key: "fullName",
      label: "Full Name",
      type: "text",
      icon: <FiUser size={16} />,
      required: true,
      placeholder: "Click to add name",
    },
    {
      key: "email",
      label: "Email",
      type: "email",
      icon: <FiMail size={16} />,
      readOnly: true,
      placeholder: "No email",
    },
    {
      key: "phone",
      label: "Phone",
      type: "text",
      icon: <FiPhone size={16} />,
      placeholder: "Click to add phone",
    },
    {
      key: "location",
      label: "Location",
      type: "text",
      icon: <FiMapPin size={16} />,
      placeholder: "Click to add location",
    },
  ];

  return (
    <ProfileInfoWrapper>
      <div className="card-header">
        <h3>Profile Info</h3>
        <button
          type="button"
          className="edit-btn"
          onClick={handleToggleEditAll}
          disabled={savingAll}
        >
          <FiEdit2 size={14} />
          <span>{isEditingAll ? "Cancel" : "Edit"}</span>
        </button>
      </div>

      {isEditingAll ? (
        <form className="edit-form" onSubmit={handleSaveAll}>
          {fields.map((field, index) => (
            <div className="form-group" key={field.key}>
              <label htmlFor={`profile-${field.key}`}>{field.label}</label>
              <input
                id={`profile-${field.key}`}
                name={field.key}
                type={field.type}
                value={formData[field.key] || ""}
                onChange={handleChange}
                disabled={field.readOnly || savingAll}
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
              disabled={savingAll}
            />
          </div>

          {errorMsg && <p className="status-msg">{errorMsg}</p>}

          <button type="submit" className="save-btn" disabled={savingAll}>
            {savingAll ? "Saving..." : "Save Changes"}
          </button>
        </form>
      ) : (
        <>
          <div className="info-list">
            {fields.map((field) => (
              <div className="info-item" key={field.key}>
                <div className="icon-circle">{field.icon}</div>
                <div className="text-group">
                  <span className="info-label">{field.label}</span>
                  <EditableField
                    value={profile[field.key]}
                    readOnly={field.readOnly}
                    required={field.required}
                    placeholder={field.placeholder}
                    onSave={(val) => handleFieldSave(field.key, val)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bio-wrapper">
            <span className="info-label">Bio</span>
            <EditableField
              value={profile.bio}
              multiline
              placeholder="Click to add bio..."
              onSave={(val) => handleFieldSave("bio", val)}
            />
          </div>

          {errorMsg && <p className="status-msg">{errorMsg}</p>}
        </>
      )}
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;