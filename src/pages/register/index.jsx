import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from '../../validations';
import {
  PageContainer, RegisterCard, Title, Subtitle, Row, CheckboxContainer, TermsError,
  DividerText, FooterText, StyledLink, BackLinkContainer, BackLink, GreenText,
  PasswordStrengthBar, StrengthSegment, StrengthLabel
} from './styles';
import InputComponent from '../../components/common/input-component';
import CustomButton from '../../components/common/custom-button';
import AppTemplate from '../../components/app-template';
import PathConstants from '../../routes/pathConstants';
import { registerUser } from '../../services/auth/auth.service';

const calculateStrength = (password) => {
  let score = 0;
  if (!password) return { score: 0, label: '' };
  if (password.length >= 6) score += 1;
  if (/[A-Z]/.test(password) || /[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[\W_]/.test(password)) score += 1;

  if (score <= 1) return { score: 1, label: 'Weak', color: '#ef4444' };
  if (score === 2) return { score: 2, label: 'Fair', color: '#f97316' };
  if (score === 3) return { score: 3, label: 'Good', color: '#eab308' };
  return { score: 4, label: 'Strong', color: '#22c55e' };
};

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setApiError('');

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
        setApiError('Registration failed. Please check your details and try again.');
      }
    },
  });

  const strength = calculateStrength(formik.values.password);

  return (
    <AppTemplate pageTitle="Create Account" path={PathConstants.REGISTER}>
      <PageContainer>
        <RegisterCard>
          <Title>Create Account</Title>
          <Subtitle>Join DKUST today — it's free</Subtitle>

          {apiError && (
            <div className="alert alert-danger py-2 small text-center" role="alert">
              {apiError}
            </div>
          )}

          <form onSubmit={formik.handleSubmit}>
            <Row>
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
            </Row>

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
                <PasswordStrengthBar>
                  <StrengthSegment color={strength.score >= 1 ? strength.color : '#e5e7eb'} />
                  <StrengthSegment color={strength.score >= 2 ? strength.color : '#e5e7eb'} />
                  <StrengthSegment color={strength.score >= 3 ? strength.color : '#e5e7eb'} />
                  <StrengthSegment color={strength.score >= 4 ? strength.color : '#e5e7eb'} />
                </PasswordStrengthBar>
                <StrengthLabel style={{ color: strength.color }}>{strength.label}</StrengthLabel>
              </>
            )}

            <CheckboxContainer>
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formik.values.agreeTerms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="agreeTerms">
                I agree to the <GreenText>Terms of Service</GreenText> and <GreenText>Privacy Policy</GreenText>
              </label>
              {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                <TermsError>{formik.errors.agreeTerms}</TermsError>
              )}
            </CheckboxContainer>

            <CustomButton
              type="submit"
              disabled={loading}
              onClickFunction={formik.handleSubmit}
              bgColor="#00a651"
              title={
                loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  "CREATE ACCOUNT"
                )
              }
            />

            <DividerText>or continue with</DividerText>
            <div className="row g-2 mb-4">
              <div className="col-12 col-sm-6">
                <button type="button" className="btn btn-outline-secondary w-100 bg-white text-dark py-2 rounded-3 border-light-gray d-flex justify-content-center align-items-center gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width="18" />
                  <span className="small fw-semibold">Google</span>
                </button>
              </div>
              <div className="col-12 col-sm-6">
                <button type="button" className="btn btn-outline-secondary w-100 bg-white text-dark py-2 rounded-3 border-light-gray d-flex justify-content-center align-items-center gap-2">
                  <i className="fab fa-facebook text-primary fs-5"></i>
                  <span className="small fw-semibold">Facebook</span>
                </button>
              </div>
            </div>

            <FooterText>
              Already have an account? <StyledLink to={PathConstants.LOGIN}>Sign In</StyledLink>
            </FooterText>
          </form>
        </RegisterCard>

        <BackLinkContainer>
          <BackLink to={PathConstants.HOME}>Back to Home</BackLink>
        </BackLinkContainer>
      </PageContainer>
    </AppTemplate>
  );
};

export default Register;