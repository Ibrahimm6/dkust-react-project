import { useState } from "react";
import { useFormik } from "formik";
import { FiCheck } from "react-icons/fi";
import { contactSchema } from "../../validations";
import PathConstants from "../../routes/pathConstants";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InputComponent from "../../components/common/input-component";
import AuthCard from "../../components/common/AuthCard";
import CustomButton from "../../components/common/custom-button";
import ScrollToTop from "../../helpers/ScrollToTop";
import { useAuth } from "../../context/auth/useAuth";
import { sendMessage } from "../../services/contact-us/messages.service";

function ContactUsPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const [error, setError] = useState("");

  const defaultName = user
    ? `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.name || ""
    : "";

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: defaultName,
      email: user?.email || "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setError("");

      const response = await sendMessage({
        id: 0,
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      });

      setLoading(false);

      if (response.status === 200 || response.status === 201) {
        resetForm();
        setIsSentSuccessfully(true);
      } else {
        setError(
          response.data?.message || "Failed to send message. Please try again."
        );
      }
    },
  });

  const InputFields = [
    {
      name: "name",
      fieldLabel: "Full Name",
      value: formik.values.name,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      placeholder: "Full Name",
      type: "text",
      error: formik.errors.name,
      touched: formik.touched.name,
    },
    {
      name: "email",
      fieldLabel: "Email Address",
      value: formik.values.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      placeholder: "you@example.com",
      type: "email",
      error: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      name: "subject",
      fieldLabel: "Subject",
      value: formik.values.subject,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      placeholder: "Subject",
      type: "text",
      error: formik.errors.subject,
      touched: formik.touched.subject,
    },
    {
      name: "message",
      fieldLabel: "Message",
      value: formik.values.message,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      placeholder: "Write your message here...",
      type: "textarea",
      error: formik.errors.message,
      touched: formik.touched.message,
    },
  ];

  return (
    <AppTemplate pageTitle="Contact" path={PathConstants.CONTACT}>
      <HeroSection
        title="Contact Us"
        subtitle="Send a question and our team will get back to you."
      />
      {isSentSuccessfully ? (
        <>
          <AuthCard
            centered
            $theme="var(--page-bg)"
            title="Message Sent"
            description="Thank you for reaching out. Our team will reply as soon as possible."
            icon={<FiCheck />}
          >
            <CustomButton
              title="Send Another Message"
              onClickFunction={() => setIsSentSuccessfully(false)}
              bgColor="#00a651"
            />
          </AuthCard>
          <ScrollToTop />
        </>
      ) : (
        <AuthCard $theme="var(--page-bg)" alertMessage={error}>
          <form onSubmit={formik.handleSubmit}>
            {InputFields.map((field) => (
              <InputComponent key={field.name} {...field} />
            ))}
            <CustomButton
              type="submit"
              disabled={loading}
              onClickFunction={formik.handleSubmit}
              bgColor="#00a651"
              title={
                loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  "Send Message"
                )
              }
            />
          </form>
        </AuthCard>
      )}
    </AppTemplate>
  );
}

export default ContactUsPage;