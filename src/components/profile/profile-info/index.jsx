import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2 } from "react-icons/fi";
import {
  SectionCard,
  CardHeader,
  CardTitle,
  EditButton,
  InfoList,
  InfoItem,
  InfoIconCircle,
  InfoTextGroup,
  InfoLabel,
  InfoValue,
  BioWrapper,
  BioText,
  EditForm,
  FormGroup,
  FormLabel,
  EditInput,
  EditTextarea,
  SaveChangesButton,
} from "./styles";

const ProfileInfo = ({ profile, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleToggleEdit = () => {
    if (isEditing) {
      setFormData(profile);
      setIsEditing(false);
    } else {
      setFormData(profile);
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setIsEditing(false);
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "text", icon: <FiUser size={16} /> },
    { name: "email", label: "Email", type: "email", icon: <FiMail size={16} /> },
    { name: "phone", label: "Phone", type: "text", icon: <FiPhone size={16} /> },
    { name: "location", label: "Location", type: "text", icon: <FiMapPin size={16} /> },
  ];

  return (
    <SectionCard>
      <CardHeader>
        <CardTitle>Profile Info</CardTitle>
        <EditButton type="button" onClick={handleToggleEdit}>
          <FiEdit2 size={14} />
          <span>{isEditing ? "Cancel" : "Edit"}</span>
        </EditButton>
      </CardHeader>

      {isEditing ? (
        <EditForm onSubmit={handleSave}>
          {fields.map((field, index) => (
            <FormGroup key={field.name}>
              <FormLabel>{field.label}</FormLabel>
              <EditInput
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                autoFocus={index === 0}
              />
            </FormGroup>
          ))}

          <FormGroup>
            <FormLabel>Bio</FormLabel>
            <EditTextarea
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
            />
          </FormGroup>

          <SaveChangesButton type="submit">Save Changes</SaveChangesButton>
        </EditForm>
      ) : (
        <>
          <InfoList>
            {fields.map((field) => (
              <InfoItem key={field.name}>
                <InfoIconCircle>{field.icon}</InfoIconCircle>
                <InfoTextGroup>
                  <InfoLabel>{field.label}</InfoLabel>
                  <InfoValue>{profile[field.name]}</InfoValue>
                </InfoTextGroup>
              </InfoItem>
            ))}
          </InfoList>

          <BioWrapper>
            <InfoLabel>Bio</InfoLabel>
            <BioText>{profile.bio}</BioText>
          </BioWrapper>
        </>
      )}
    </SectionCard>
  );
};

export default ProfileInfo;