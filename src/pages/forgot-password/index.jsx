import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppTemplate from "../../components/app-template";
import CustomButton from "../../components/common/custom-button";
import InputComponent from "../../components/common/input-component";
import AuthProvider from "../../components/common/AuthProvider";
import PathConstants from "../../routes/pathConstants";
import { forgotPassword } from "../../services/auth/auth.service";

const ForgotPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const handleSendCode = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatusMsg({
        type: "danger",
        text: "Please enter your email address.",
      });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    const response = await forgotPassword({ email });
    setLoading(false);

    if (response.status === 200 || response.status === 201) {
      navigate(PathConstants.VERIFY, {
        state: { email, fromFlow: "reset-password" },
      });
    } else {
      setStatusMsg({
        type: "danger",
        text:
          response.data?.message ||
          "Failed to send verification code. Please try again.",
      });
    }
  };

  return (
    <AppTemplate
      pageTitle="Forgot Password"
      path={PathConstants.FORGOT_PASSWORD}
    >
      <AuthProvider
        icon={<i className="fas fa-envelope-open-text"></i>}
        title="Enter Your Email"
        description="We will send a 6-digit verification code to your email address for verification."
        alertMessage={statusMsg.text}
        alertType={statusMsg.type}
        backLinkText="Back to Login"
        backLinkTo={PathConstants.LOGIN}
      >
        <form onSubmit={handleSendCode}>
          <InputComponent
            name="email"
            fieldLabel="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
          />

          <CustomButton
            type="submit"
            disabled={loading}
            onClickFunction={handleSendCode}
            bgColor="#00a651"
            title={
              loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span>Sending...</span>
                </>
              ) : (
                "Send Code"
              )
            }
          />
        </form>
      </AuthProvider>
    </AppTemplate>
  );
};

export default ForgotPasswordPage;