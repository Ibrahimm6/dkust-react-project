import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputComponent from './common/input-component';
import CustomButton from './common/custom-button';
import AppTemplate from './app-template';
import PathConstants from '../routes/pathConstants';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  rememberMe: Yup.boolean()
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '', rememberMe: false },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log('Login Submitted:', values);
    }
  });

  return (
    <AppTemplate pageTitle="Login" path={PathConstants.LOGIN}>
      <main className="custom-page-bg flex-grow-1 d-flex flex-column align-items-center justify-content-center py-5">
        <div className="card login-card shadow-lg border-0 rounded-4 p-4 p-md-5 mb-3 login-card-wrapper">
          <div className="card-body p-0">
            <div className="text-center mb-4">
              <h3 className="fw-bold text-dark mb-1">Welcome Back</h3>
              <p className="text-muted small">Sign in to your DKUST account</p>
            </div>
            
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

              <div className="d-flex justify-content-end mb-3" style={{ marginTop: '-5px' }}>
                <a href="#forgot" className="text-green text-decoration-none small fw-bold">Forgot password?</a>
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

              <div className="mb-4 form-check d-flex align-items-center gap-2 mt-1">
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  className="form-check-input mt-0 custom-checkbox" 
                  id="rememberMe"
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label text-muted small fw-medium mt-1" htmlFor="rememberMe">Remember me</label>
              </div>

              <CustomButton title="SIGN IN" onClickFunction={formik.handleSubmit} bgColor="#00a651" />
              
              <div className="text-center my-3">
                <span className="text-muted small text-micro">or continue with</span>
              </div>

              <div className="row gx-3 mb-4">
                <div className="col-6">
                  <button type="button" className="btn btn-outline-secondary w-100 bg-white text-dark py-2 rounded-3 border-light-gray d-flex justify-content-center align-items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width="18" />
                    <span className="small fw-semibold">Google</span>
                  </button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-outline-secondary w-100 bg-white text-dark py-2 rounded-3 border-light-gray d-flex justify-content-center align-items-center gap-2">
                    <i className="fab fa-facebook text-primary fs-5"></i>
                    <span className="small fw-semibold">Facebook</span>
                  </button>
                </div>
              </div>

              <div className="text-center mt-2">
                <p className="text-muted small mb-0">Don't have an account? <Link to="/register" className="text-green text-decoration-none fw-bold">Sign up</Link></p>
              </div>
            </form>
          </div>
        </div>
        <Link to="/" className="text-white text-decoration-underline small opacity-75 hover-opacity-100 transition">Back to Home</Link>
      </main>
    </AppTemplate>
  );
};

export default LoginForm;