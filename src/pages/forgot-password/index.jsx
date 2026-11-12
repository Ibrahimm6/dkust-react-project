import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import AppTemplate from "../../components/app-template";
import CustomButton from "../../components/common/custom-button";
import PathConstants from "../../routes/pathConstants";
import { forgotPassword } from "../../services/auth/auth.service";
import { VerificationWrapper } from "./styles";

const ForgotPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

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
        state: { email: email, fromFlow: "reset-password" },
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
    <AppTemplate pageTitle="Verify Email" path={PathConstants.VERIFY}>
      <VerificationWrapper>
        <div className="verify-card">
          <>
            <div className="icon-box">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h2>Enter Your Email</h2>
            <p className="subtitle">
              We will send a 6-digit verification code to your email address for
              verification.
            </p>

            {statusMsg.text && (
              <div
                className={`alert alert-${statusMsg.type} py-2 small`}
                role="alert"
              >
                {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleSendCode}>
              {!location.state?.email && (
                <div className="email-fallback">
                  <label htmlFor="verify-email">Email Address</label>
                  <input
                    id="verify-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              )}

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
          </>
        </div>

        <Link to={PathConstants.REGISTER} className="back-link">
          Back to Register
        </Link>
      </VerificationWrapper>
    </AppTemplate>
  );
};

export default ForgotPasswordPage;
