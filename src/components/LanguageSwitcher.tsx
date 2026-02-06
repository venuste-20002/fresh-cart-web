import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage('en')}
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`language-btn ${i18n.language === 'fr' ? 'active' : ''}`}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('rw')}
        className={`language-btn ${i18n.language === 'rw' ? 'active' : ''}`}
      >
        RW
      </button>
    </div>
  );
};

export default LanguageSwitcher;
