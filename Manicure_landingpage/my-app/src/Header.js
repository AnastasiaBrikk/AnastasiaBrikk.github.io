import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header({ changeLanguage }) {
  const { t } = useTranslation();

  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/gallery">{t('Gallery')}</Link></li>
          <li><Link to="/price-list">{t('Price List')}</Link></li>
          <li><Link to="/contacts">{t('Contacts')}</Link></li>
        </ul>
      </nav>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <button onClick={() => changeLanguage('he')}>HE</button>
      </div>
    </header>
  );
}

export default Header;
