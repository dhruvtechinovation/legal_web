import React from 'react';
import { useTranslation } from 'react-i18next';

const Languagechecker = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="p-4 absolute right-0">
      {/* 🌐 Language Switcher */}
      <div className="mb-4">
        <select
          value={i18n.language}
          onChange={handleLanguageChange}
          className="border px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
        </select>
      </div>

      {/* 🌟 Translated content example */}
      {/* <h1 className="text-2xl font-bold">{t('services.section_title')}</h1>
      <p>{t('services.section_desc')}</p> */}
    </div>
  );
};

export default Languagechecker;
