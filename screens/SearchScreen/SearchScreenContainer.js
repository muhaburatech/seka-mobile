import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchScreenPresenter from './SearchScreenPresenter';

function SearchScreenContainer({ products }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchInputChange(input) {
    return setSearchInput(input);
  }

  useEffect(() => {
    setSearchResults(
      products.filter((product) => {
        return (
          product.Title.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.Description.toLowerCase().includes(searchInput.toLowerCase())
        );
      })
    );
  }, [searchInput]);

  return (
    <SearchScreenPresenter
      searchInput={searchInput}
      handleInputChange={handleSearchInputChange}
      searchResults={searchResults}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(SearchScreenContainer);
