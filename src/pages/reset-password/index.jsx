import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import AppTemplate from "../../components/app-template";
import CustomButton from "../../components/common/custom-button";
import InputComponent from "../../components/common/input-component";
import AuthProvider from "../../components/common/AuthProvider";
import PathConstants from "../../routes/pathConstants";
import { resetPassword } from "../../services/auth/auth.service";
import { resetPasswordSchema } from "../../validations";

const ResetPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  const [isReset, setIsReset] = useState(false);

  const email = location.state?.email || "";
  const code = location.state?.code || "";

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setStatusMsg({ type: "", text: "" });

      const response = await resetPassword({
        email,
        code,
        newPassword: values.newPassword,
      });

      setLoading(false);

      if (response.status === 200 || response.status === 201) {
        setIsReset(true);
      } else {
        setStatusMsg({
          type: "danger",
          text:
            response.data?.message ||
            "Failed to reset password. Please try again later.",
        });
      }
    },
  });

  return (
    <AppTemplate pageTitle="Reset Password" path={PathConstants.RESET_PASSWORD}>
      <AuthProvider
        icon={isReset ? <i className="fas fa-check"></i> : null}
        title={isReset ? "Password Reset Successfully!" : "Enter Your New Password"}
        description={
          isReset
            ? "Your password has been reset successfully. You can now sign in to your account."
            : "Please enter and confirm your new password below."
        }
        alertMessage={!isReset ? statusMsg.text : ""}
        alertType={statusMsg.type}
        backLinkText="Back to Login"
        backLinkTo={PathConstants.LOGIN}
      >
        {isReset ? (
          <CustomButton
            title="Go to Login"
            onClickFunction={() => navigate(PathConstants.LOGIN)}
            bgColor="#00a651"
          />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <InputComponent
              name="newPassword"
              fieldLabel="New Password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Min. 6 characters"
              type="password"
              error={formik.errors.newPassword}
              touched={formik.touched.newPassword}
            />

            <InputComponent
              name="confirmPassword"
              fieldLabel="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Repeat your password"
              type="password"
              error={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
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
                    <span>Resetting...</span>
                  </>
                ) : (
                  "Reset Password"
                )
              }
            />
          </form>
        )}
      </AuthProvider>
    </AppTemplate>
  );
};

export default ResetPasswordPage;