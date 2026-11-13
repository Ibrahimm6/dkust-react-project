import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../../validations";
import InputComponent from "../../components/common/input-component";
import CustomButton from "../../components/common/custom-button";
import AppTemplate from "../../components/app-template";
import AuthProvider from "../../components/common/AuthProvider";
import PathConstants from "../../routes/pathConstants";
import { registerUser } from "../../services/auth/auth.service";
import { RegisterFormStyles } from "./styles";

const calculateStrength = (password) => {
  let score = 0;
  if (!password) return { score: 0, label: "" };
  if (password.length >= 6) score += 1;
  if (/[A-Z]/.test(password) || /[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[\W_]/.test(password)) score += 1;

  if (score <= 1) return { score: 1, label: "Weak", color: "#ef4444" };
  if (score === 2) return { score: 2, label: "Fair", color: "#f97316" };
  if (score === 3) return { score: 3, label: "Good", color: "#eab308" };
  return { score: 4, label: "Strong", color: "#22c55e" };
};

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setApiError("");

      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };

      const response = await registerUser(payload);
      setLoading(false);

      if (response.status === 200 || response.status === 201) {
        navigate(PathConstants.VERIFY, { state: { email: values.email } });
      } else {
        setApiError(
          response.data?.message ||
            "Registration failed. Please check your details and try again."
        );
      }
    },
  });

  const strength = calculateStrength(formik.values.password);

  return (
    <AppTemplate pageTitle="Create Account" path={PathConstants.REGISTER}>
      <AuthProvider
        title="Create Account"
        description="Join DKUST today — it's free"
        alertMessage={apiError}
        maxWidth="500px"
        showSocial
        footerText="Already have an account?"
        footerLinkText="Sign In"
        footerLinkTo={PathConstants.LOGIN}
      >
        <RegisterFormStyles onSubmit={formik.handleSubmit}>
          <div className="name-row">
            <InputComponent
              name="firstName"
              fieldLabel="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="John"
              type="text"
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
            />
            <InputComponent
              name="lastName"
              fieldLabel="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Doe"
              type="text"
              error={formik.errors.lastName}
              touched={formik.touched.lastName}
            />
          </div>

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
            name="password"
            fieldLabel="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Min. 6 characters"
            type="password"
            error={formik.errors.password}
            touched={formik.touched.password}
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

          {formik.values.password && (
            <>
              <div className="strength-bar">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="segment"
                    style={{
                      backgroundColor:
                        strength.score >= level ? strength.color : "#e5e7eb",
                    }}
                  />
                ))}
              </div>
              <div
                className="strength-label"
                style={{ color: strength.color }}
              >
                {strength.label}
              </div>
            </>
          )}

          <div className="checkbox-row">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="agreeTerms">
              I agree to the <span className="green-text">Terms of Service</span>{" "}
              and <span className="green-text">Privacy Policy</span>
            </label>
            {formik.touched.agreeTerms && formik.errors.agreeTerms && (
              <div className="terms-error">{formik.errors.agreeTerms}</div>
            )}
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
                  <span>Creating Account...</span>
                </>
              ) : (
                "CREATE ACCOUNT"
              )
            }
          />
        </RegisterFormStyles>
      </AuthProvider>
    </AppTemplate>
  );
};

export default Register;