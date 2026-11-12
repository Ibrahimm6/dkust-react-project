import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import AppTemplate from "../../components/app-template";
import CustomButton from "../../components/common/custom-button";
import PathConstants from "../../routes/pathConstants";
import {
  forgotPassword,
  resetPassword,
} from "../../services/auth/auth.service";
import { VerificationWrapper } from "./styles";
import { useFormik } from "formik";
import { resetPasswordSchema } from "../../validations";
import InputComponent from "../../components/common/input-component";

const ResetPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [isReset, setIsReset] = useState(false);

  const email = location.state?.email || "";
  const code = location.state?.code || "";

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResetPassword = async (values) => {
    // e.preventDefault();

    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    const response = await resetPassword({
      email,
      code,
      newPassword: values.newPassword,
    });
    // fake response for testing
    // const response = {
    // status: 200,
    // data: { message: "Password reset successfully" },
    // };
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
  };

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      await handleResetPassword(values);
    },
  });

  return (
    <AppTemplate pageTitle="Reset Password" path={PathConstants.RESET_PASSWORD}>
      <VerificationWrapper>
        <div className="verify-card">
          {isReset ? (
            <>
              <div className="icon-box">
                <i className="fas fa-check"></i>
              </div>
              <h2>Password Reset Successfully!</h2>
              <p className="subtitle">
                Your password has been reset successfully. You can now sign in
                to your account.
              </p>
              <CustomButton
                title="Go to Login"
                onClickFunction={() => navigate(PathConstants.LOGIN)}
                bgColor="#00a651"
              />
            </>
          ) : (
            <>
              {/* <div className="icon-box">
                <i className="fas fa-envelope-open-text"></i>
              </div> */}
              <h2>Enter Your New Password</h2>
              {/* <p className="subtitle">
                Please enter your new password below. Make sure to choose a strong
                password that you haven't used before.
              </p> */}

              {statusMsg.text && (
                <div
                  className={`alert alert-${statusMsg.type} py-2 small`}
                  role="alert"
                >
                  {statusMsg.text}
                </div>
              )}

              <form onSubmit={formik.handleSubmit}>
                <div className="email-fallback">
                  <InputComponent
                    name="newPassword"
                    fieldLabel="Password"
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
                </div>
                {/* <div className="email-fallback">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div> */}

                <CustomButton
                  type="submit"
                  disabled={loading}
                  // onClickFunction={handleResetPassword}
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
            </>
          )}
        </div>

        <Link to={PathConstants.REGISTER} className="back-link">
          Back to Register
        </Link>
      </VerificationWrapper>
    </AppTemplate>
  );
};

export default ResetPasswordPage;
