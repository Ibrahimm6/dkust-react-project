import { useFormik } from "formik";
import { ContactUsPageStyles } from "./styles";
import { contactSchema } from "../../validations";
import PathConstants from "../../routes/pathConstants";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InputComponent from "../../components/common/input-component";
import AuthProvider from "../../components/common/AuthProvider";
import CustomButton from "../../components/common/custom-button";
import { useState } from "react";
import { sendMessage } from "../../services/contact-us/messages.service";
import { FiCheck } from "react-icons/fi";
import ScrollToTop from "../../helpers/ScrollToTop";

function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    setLoading(true);
    // console.log(values);

    const response = await sendMessage({
      id: 0,
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    });

    setTimeout(() => {
      setLoading(false);
      // console.log(response);
      if (response.status === 200 || response.status === 201) {
        setIsSentSuccessfully(true);
      } else {
        setError("Failed to send message. Please try again.");
      }
    }, 2000);
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: contactSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <AppTemplate pageTitle="Contact" path={PathConstants.CONTACT}>
      <HeroSection
        title="Contact Us"
        subtitle="Send a question and our team will get back to you."
      />
      {isSentSuccessfully ? (
        <>
          <AuthProvider
            $theme="var(--color-white)"
            title="Message sent"
            description="Thank you. We will reply as soon as possible."
            icon={<FiCheck />}
          ></AuthProvider>
          <ScrollToTop />
        </>
      ) : (
        <AuthProvider $theme="var(--page-bg)" alertMessage={error}>
          <form onSubmit={formik.handleSubmit}>
            <InputComponent
              name="name"
              fieldLabel="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Full Name"
              type="text"
              error={formik.errors.name}
              touched={formik.touched.name}
            />
            <InputComponent
              name="email"
              fieldLabel="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="you@example.com"
              type="email"
              error={formik.errors.email}
              touched={formik.touched.email}
            />
            <InputComponent
              name="subject"
              fieldLabel="Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Subject"
              type="text"
              error={formik.errors.subject}
              touched={formik.touched.subject}
            />
            <InputComponent
              name="message"
              fieldLabel="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Message"
              type="textarea"
              error={formik.errors.message}
              touched={formik.touched.message}
            />
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
        </AuthProvider>
      )}
    </AppTemplate>
  );
}

export default ContactUsPage;
