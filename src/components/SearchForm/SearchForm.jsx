import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchFormStyled } from './SearchForm.styled';
import { StyledButton } from 'components/Button/Button.styled';

export const SearchForm = ({ onSubmit = () => {}, defaultValue }) => {
  const { t } = useTranslation();
  const searchRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(searchRef.current.value);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <label className="label">
        {t('searchFormLabel')}
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={`${t('searchFormPlaceholder')}`}
          ref={searchRef}
          defaultValue={defaultValue}
        ></input>
      </label>

      <StyledButton type="submit" className="button">
        {t('searchFormBtn')}
      </StyledButton>
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
