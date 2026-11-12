import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import AppTemplate from "../../components/app-template";
import CustomButton from "../../components/common/custom-button";
import PathConstants from "../../routes/pathConstants";
import {
  verifyEmailCode,
  resendVerificationCode,
} from "../../services/auth/auth.service";
import { VerificationWrapper } from "./styles";

const VerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  const [isVerified, setIsVerified] = useState(false);

  const fromFlow = location.state?.fromFlow || "register";

  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1);
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pastedData) return;

    const updatedOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      updatedOtp[i] = pastedData[i] || "";
    }
    setOtp(updatedOtp);

    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const code = otp.join("");

    if (!email) {
      setStatusMsg({
        type: "danger",
        text: "Please enter your email address.",
      });
      return;
    }
    if (code.length < 6) {
      setStatusMsg({
        type: "danger",
        text: "Please enter the complete 6-digit code.",
      });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    const response = await verifyEmailCode({ email, code });
    // fake response for testing
    // const response = {
    //   status: 200,
    //   data: { message: "Email verified successfully." },
    // };

    setLoading(false);

    if (response.status === 200 || response.status === 201) {
      if (fromFlow === "reset-password") {
        navigate(PathConstants.RESET_PASSWORD, {
          state: { email: email, code: code },
        });
      } else {
        setIsVerified(true);
      }
    } else {
      setStatusMsg({
        type: "danger",
        text: "Invalid or expired verification code.",
      });
    }
  };

  const handleResend = async () => {
    if (!email) {
      setStatusMsg({
        type: "danger",
        text: "Please enter your email address first.",
      });
      return;
    }

    setResendLoading(true);
    setStatusMsg({ type: "", text: "" });

    const response = await resendVerificationCode({ email });
    setResendLoading(false);

    if (response.status === 200 || response.status === 201) {
      setTimer(60);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
      setStatusMsg({
        type: "success",
        text: "A new verification code has been sent to your email.",
      });
    } else {
      setStatusMsg({
        type: "danger",
        text: "Failed to resend code. Please try again.",
      });
    }
  };

  return (
    <AppTemplate pageTitle="Verify Email" path={PathConstants.VERIFY}>
      <VerificationWrapper>
        <div className="verify-card">
          {isVerified ? (
            <>
              <div className="icon-box">
                <i className="fas fa-check"></i>
              </div>
              <h2>Email Verified!</h2>
              <p className="subtitle">
                Your account has been verified successfully. You can now sign in
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
              <div className="icon-box">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <h2>Verify Your Email</h2>
              <p className="subtitle">
                We've sent a 6-digit verification code to
                {location.state?.email && (
                  <strong>{location.state.email}</strong>
                )}
              </p>

              {statusMsg.text && (
                <div
                  className={`alert alert-${statusMsg.type} py-2 small`}
                  role="alert"
                >
                  {statusMsg.text}
                </div>
              )}

              <form onSubmit={handleVerify}>
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

                <div className="otp-inputs" onPaste={handlePaste}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                    />
                  ))}
                </div>

                <CustomButton
                  type="submit"
                  disabled={loading || otp.join("").length < 6}
                  onClickFunction={handleVerify}
                  bgColor="#00a651"
                  title={
                    loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span>Verifying...</span>
                      </>
                    ) : (
                      "VERIFY EMAIL"
                    )
                  }
                />
              </form>

              <div className="resend-section">
                Didn't receive the code?
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={timer > 0 || resendLoading}
                >
                  {resendLoading
                    ? "Sending..."
                    : timer > 0
                      ? `Resend in ${timer}s`
                      : "Resend Code"}
                </button>
              </div>
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

export default VerificationPage;
