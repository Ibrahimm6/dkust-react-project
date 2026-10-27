import React from "react";
import AppTemplate from "../../components/app-template";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PathConstants from "../../routes/pathConstants";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/common/custom-button";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <AppTemplate pageTitle="Page Not Found">
      <div className="app-shell d-flex flex-column min-vh-100">
        <Header />
        
        <main 
          className="app-main flex-grow-1 d-flex flex-column align-items-center justify-content-center" 
          style={{ backgroundColor: 'var(--color-bg-gray)' }}
        >
          <div className="text-center p-5">
            <h1 style={{ fontSize: '80px', fontWeight: '800', color: 'var(--color-primary)' }}>
              404
            </h1>
            <h3 className="text-dark mb-3">Page Not Found</h3>
            <p className="text-muted mb-4">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <div style={{ width: '200px', margin: '0 auto' }}>
              <CustomButton 
                title="Back to Home" 
                onClickFunction={() => navigate(PathConstants.HOME)} 
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </AppTemplate>
  );
};

export default PageNotFound;