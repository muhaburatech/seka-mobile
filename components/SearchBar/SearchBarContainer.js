import React from 'react';
import SearchBarPresenter from './SearchBarPresenter';

const SearchBarContainer = ({ searchInput, handleInputChange }) => {
  return (
    <SearchBarPresenter
      value={searchInput}
      updateValue={handleInputChange}
      onSubmit={handleInputChange}
    />
  );
};

export default SearchBarContainer;
