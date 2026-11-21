import { useState, useMemo } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { FiCheck } from "react-icons/fi";
import { getContactSchema } from "../../validations";
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
  const { t } = useTranslation();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const [errorState, setErrorState] = useState({
    hasError: false,
    message: "",
  });

  const validationSchema = useMemo(() => getContactSchema(t), [t]);

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
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setErrorState({ hasError: false, message: "" });

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
        setErrorState({
          hasError: true,
          message: response.data?.message || "",
        });
      }
    },
  });

  const alertMessage = errorState.hasError
    ? errorState.message || t("contact.sendError")
    : "";

  const inputFields = [
    {
      name: "name",
      fieldLabel: t("profile.fullName"),
      value: formik.values.name,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      placeholder: t("profile.fullName"),
      type: "text",
      error: formik.errors.name,
      touched: formik.touched.name,
    },
    {
      name: "email",
      fieldLabel: t("auth.emailLabel"),
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
      fieldLabel: t("contact.subject"),
      value: formik.values.subject,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      placeholder: t("contact.subject"),
      type: "text",
      error: formik.errors.subject,
      touched: formik.touched.subject,
    },
    {
      name: "message",
      fieldLabel: t("contact.message"),
      value: formik.values.message,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      placeholder: t("contact.messagePlaceholder"),
      type: "textarea",
      error: formik.errors.message,
      touched: formik.touched.message,
    },
  ];

  return (
    <AppTemplate
      pageTitle={t("contact.pageTitle")}
      path={PathConstants.CONTACT}
    >
      <HeroSection
        title={t("contact.heroTitle")}
        subtitle={t("contact.heroSubtitle")}
      />
      {isSentSuccessfully ? (
        <>
          <AuthCard
            centered
            $theme="var(--page-bg)"
            title={t("contact.sentTitle")}
            description={t("contact.sentDesc")}
            icon={<FiCheck />}
            backLinkTo={null}
          >
            <CustomButton
              title={t("contact.sendAnother")}
              onClickFunction={() => setIsSentSuccessfully(false)}
              bgColor="#00a651"
            />
          </AuthCard>
          <ScrollToTop />
        </>
      ) : (
        <AuthCard
          $theme="var(--page-bg)"
          alertMessage={alertMessage}
          backLinkTo={null}
        >
          <form onSubmit={formik.handleSubmit}>
            {inputFields.map((field) => (
              <InputComponent key={field.name} {...field} />
            ))}
            <CustomButton
              type="submit"
              disabled={loading}
              bgColor="#00a651"
              title={
                loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>{t("contact.sendingBtn")}</span>
                  </>
                ) : (
                  t("contact.sendBtn")
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