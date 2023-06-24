import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { SearchFormStyled } from './SearchForm.styled';
import { StyledButton } from 'components/Button/Button.styled';

export const SearchForm = ({ onSubmit = () => {}, defaultValue }) => {
  const searchRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(searchRef.current.value);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <label>
        Let's try to find a movie
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter the movie title"
          ref={searchRef}
          defaultValue={defaultValue}
        ></input>
      </label>

      <StyledButton type="submit" className="button">
        Search
      </StyledButton>
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
