import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../validations";
import InputComponent from "../../components/common/input-component";
import CustomButton from "../../components/common/custom-button";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import { loginUser } from "../../services/auth/auth.service";
import { LoginWrapper } from "./styles";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const formik = useFormik({
    initialValues: { email: "", password: "", rememberMe: false },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setApiError("");

      const response = await loginUser({
        email: values.email,
        password: values.password,
      });

      setLoading(false);

      if (response.status === 200 || response.status === 201) {
        navigate(PathConstants.HOME);
      } else {
        if (response?.data?.requiresEmailVerification) {
          navigate(PathConstants.VERIFY, { state: { email: values.email } });
        } else {
          setApiError(
            response.data?.message ||
              "Invalid email or password. Please try again.",
          );
        }
      }
    },
  });

  return (
    <AppTemplate pageTitle="Login" path={PathConstants.LOGIN}>
      <LoginWrapper>
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your DKUST account</p>

          {apiError && (
            <div
              className="alert alert-danger py-2 small text-center"
              role="alert"
            >
              {apiError}
            </div>
          )}

          <form onSubmit={formik.handleSubmit}>
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

            <div className="forgot-row">
              <a href={PathConstants.FORGOT_PASSWORD}>Forgot password?</a>
            </div>

            <InputComponent
              name="password"
              fieldLabel="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
              type="password"
              error={formik.errors.password}
              touched={formik.touched.password}
            />

            <div className="remember-row">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

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
                    <span>Signing in...</span>
                  </>
                ) : (
                  "SIGN IN"
                )
              }
            />

            <div className="divider">or continue with</div>

            <div className="social-grid">
              <button type="button">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                  width="18"
                />
                <span>Google</span>
              </button>
              <button type="button">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </button>
            </div>

            <div className="footer-text">
              Don't have an account?{" "}
              <Link to={PathConstants.REGISTER}>Sign up</Link>
            </div>
          </form>
        </div>

        <Link to={PathConstants.HOME} className="back-link">
          Back to Home
        </Link>
      </LoginWrapper>
    </AppTemplate>
  );
};

export default LoginPage;
