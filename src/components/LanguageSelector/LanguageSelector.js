import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectStyled } from '../Select/Select.styled';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleLanguageSelect = e => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <SelectStyled>
      <label htmlFor="language-select">{t('languageSelect')}:</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageSelect}
      >
        <option value="en">
          English
          {/*<img*/}
          {/*  src="../../images/flag_greatbritain.png"*/}
          {/*  alt="English"*/}
          {/*  width={10}*/}
          {/*/>*/}
        </option>
        <option value="ua">
          Ukrainian
          {/*<img src="../../images/flag_ua.png" alt="Ukrainian" width={10} />*/}
        </option>
      </select>
    </SelectStyled>
  );
};

export default LanguageSelector;
