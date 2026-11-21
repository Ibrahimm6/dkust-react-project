import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema, registerProfileSchema } from "../../validations";
import InputComponent from "../../components/common/input-component";
import CustomButton from "../../components/common/custom-button";
import AppTemplate from "../../components/app-template";
import AuthCard from "../../components/common/AuthCard";
import PathConstants from "../../routes/pathConstants";
import environment from "../../environment";
import { setLocalStorage } from "../../helpers/local-storage";
import { registerUser } from "../../services/auth/auth.service";
import { RegisterFormStyles } from "./styles";

const STEP_1_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "password",
  "confirmPassword",
  "agreeTerms",
];

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
  const [step, setStep] = useState(1);
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
      phone: "",
      location: "",
      bio: "",
    },
    validationSchema: step === 1 ? registerSchema : registerProfileSchema,
    onSubmit: async (values) => {
      if (step === 1) {
        await handleNextStep();
        return;
      }

      setLoading(true);
      setApiError("");

      const firstName = values.firstName.trim();
      const lastName = values.lastName.trim();
      const email = values.email.trim();
      const phone = values.phone.trim();
      const location = values.location.trim();
      const bio = values.bio.trim();

      const response = await registerUser({
        firstName,
        lastName,
        email,
        password: values.password,
      });
      setLoading(false);

      if (response.status === 200 || response.status === 201) {
        if (phone || location || bio) {
          setLocalStorage(environment.PENDING_PROFILE_KEY, {
            email: email.toLowerCase(),
            firstName,
            lastName,
            phone,
            location,
            bio,
          });
        }
        navigate(PathConstants.VERIFY, { state: { email } });
      } else {
        setApiError(
          response.data?.message ||
            "Registration failed. Please check your details and try again.",
        );
      }
    },
  });

  const handleNextStep = async () => {
    const errors = await formik.validateForm();
    const hasStep1Errors = STEP_1_FIELDS.some((field) =>
      Boolean(errors[field]),
    );

    if (hasStep1Errors) {
      const touchedFields = STEP_1_FIELDS.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {});
      formik.setTouched({ ...formik.touched, ...touchedFields });
      return;
    }

    setApiError("");
    setStep(2);
  };

  const handlePrevStep = () => {
    if (loading) return;
    setApiError("");
    setStep(1);
  };

  const strength = calculateStrength(formik.values.password);

  return (
    <AppTemplate pageTitle="Create Account" path={PathConstants.REGISTER}>
      <AuthCard
        title={step === 1 ? "Create Account" : "Complete Your Profile"}
        description={
          step === 1
            ? "Join DKUST today — it's free"
            : "Add a few extra details (optional) to personalize your profile"
        }
        alertMessage={apiError}
        maxWidth="500px"
        showSocial={step === 1}
        footerText="Already have an account?"
        footerLinkText="Sign In"
        footerLinkTo={PathConstants.LOGIN}
      >
        <RegisterFormStyles onSubmit={formik.handleSubmit}>
          {step === 1 ? (
            <>
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
                  I agree to the{" "}
                  <span className="green-text">Terms of Service</span> and{" "}
                  <span className="green-text">Privacy Policy</span>
                </label>
                {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                  <div className="terms-error">{formik.errors.agreeTerms}</div>
                )}
              </div>

              <CustomButton
                type="button"
                onClickFunction={handleNextStep}
                bgColor="#00a651"
                title="CONTINUE"
              />
            </>
          ) : (
            <>
              <InputComponent
                name="phone"
                fieldLabel="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="+1 234 567 8900"
                type="text"
                error={formik.errors.phone}
                touched={formik.touched.phone}
              />

              <InputComponent
                name="location"
                fieldLabel="Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="City, Country"
                type="text"
                error={formik.errors.location}
                touched={formik.touched.location}
              />

              <InputComponent
                name="bio"
                fieldLabel="Bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Tell us a little about yourself..."
                type="textarea"
                error={formik.errors.bio}
                touched={formik.touched.bio}
              />

              <div className="step-actions">
                <CustomButton
                  type="button"
                  disabled={loading}
                  onClickFunction={handlePrevStep}
                  title="BACK"
                />
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
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      "CREATE ACCOUNT"
                    )
                  }
                />
              </div>
            </>
          )}

          <div
            className="step-dots"
            role="tablist"
            aria-label="Registration steps"
          >
            <button
              type="button"
              className={`dot ${step === 1 ? "active" : ""}`}
              onClick={handlePrevStep}
              disabled={loading}
              aria-label="Step 1: Account details"
              aria-current={step === 1 ? "step" : undefined}
            />
            <button
              type="button"
              className={`dot ${step === 2 ? "active" : ""}`}
              onClick={() => step === 1 && handleNextStep()}
              disabled={loading}
              aria-label="Step 2: Profile details"
              aria-current={step === 2 ? "step" : undefined}
            />
          </div>
        </RegisterFormStyles>
      </AuthCard>
    </AppTemplate>
  );
};

export default Register;