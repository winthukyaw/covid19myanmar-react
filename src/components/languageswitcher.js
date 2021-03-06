import React from 'react';
import {useTranslation} from 'react-i18next';

import locales from '../i18n/locales.json';

export default function LanguageSwitcher() {
  const {i18n, t} = useTranslation();

  const onLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="select-dropdown">
      <select onChange={onLanguageChange} aria-label={t('Select Language')} value={i18n.language}>
        {Object.entries(locales).map(([key, lang]) => (
          <option key={key} value={key}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
