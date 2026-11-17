import React, { useState } from "react";
import { updatePassword } from "../../../services/auth/auth.service";
import { UpdatePasswordWrapper } from "./styles";

const UpdatePassword = () => {
  const [form, setForm] = useState({ current: "", next: "", confirm: "" });
  const [message, setMessage] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (form.next.length < 8) {
      return setMessage({
        error: true,
        text: "Password must be at least 8 characters",
      });
    }
    if (form.next !== form.confirm) {
      return setMessage({ error: true, text: "Passwords do not match" });
    }
    if (form.next === form.current) {
      return setMessage({
        error: true,
        text: "New password must be different",
      });
    }

    setSaving(true);
    const res = await updatePassword({
      currentPassword: form.current,
      newPassword: form.next,
    });
    setSaving(false);

    if ([200, 201, 204].includes(res?.status)) {
      setMessage({
        error: false,
        text: res?.data?.message || "Password updated successfully",
      });
      setForm({ current: "", next: "", confirm: "" });
    } else {
      const serverMsg =
        res?.data?.message || res?.data?.error || `Status ${res?.status}`;
      setMessage({
        error: true,
        text: `Could not update password: ${serverMsg}`,
      });
    }
  };

  return (
    <UpdatePasswordWrapper $error={message?.error}>
      <h3>Update Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="current"
          placeholder="Current Password"
          value={form.current}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="next"
          placeholder="New Password"
          value={form.next}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirm"
          placeholder="Confirm New Password"
          value={form.confirm}
          onChange={handleChange}
          required
        />
        {message && <p className="form-message">{message.text}</p>}
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Update Password"}
        </button>
      </form>
    </UpdatePasswordWrapper>
  );
};

export default UpdatePassword;