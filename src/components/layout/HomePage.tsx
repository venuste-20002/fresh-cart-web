/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HomePageProps {
  isAuthenticated: boolean;
  userRole?: 'buyer' | 'seller';
}

const HomePage: React.FC<HomePageProps> = ({ isAuthenticated, userRole }) => {
  const { t, i18n } = useTranslation();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLanguageOptions(false);
  };

  return (
    <div>
      {/* {!isAuthenticated && ( */}
        <div className="banner">
          <h2>{t('homepage.bannerTitle')}</h2>
          <p className="btn-link" onClick={() => setShowLanguageOptions(!showLanguageOptions)}>
            {t('homepage.changeLanguage')}
          </p>
          {showLanguageOptions && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '10%',
              left: '80%',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              zIndex: 1000,
            }}>
              <button
                onClick={() => changeLanguage('en')}
                style={{
                  padding: '10px 15px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                  color: '#333'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('fr')}
                style={{
                  padding: '10px 15px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                  color: '#333'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Français
              </button>
              <button
                onClick={() => changeLanguage('rw')}
                style={{
                  padding: '10px 15px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                  color: '#333'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Kinyarwanda
              </button>
            </div>
          )}
        </div>
      {/* )} */}
      {/* {isAuthenticated && userRole === 'buyer' && (
        <div className="banner">
          <h2>Want to sell your products?</h2>
          <p>Upgrade your profile to become a seller and start listing your products!</p>
          <Link to="/become-seller" className="btn-link">Upgrade to Seller</Link>
        </div>
      )} */}
      {/* Other homepage content */}
    </div>
  );
};

export default HomePage;
