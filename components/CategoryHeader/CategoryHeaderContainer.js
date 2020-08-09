import React from 'react';
import { connect } from 'react-redux';
import CategoryHeaderPresenter from './CategoryHeaderPresenter';

const CategoryHeaderContainer = ({
  currentTab,
  handleCategoryChange,
  catgries,
}) => {
  return (
    <CategoryHeaderPresenter
      currentTab={currentTab}
      handleCategoryChange={handleCategoryChange}
      categories={catgries}
    />
  );
};

function mapStateToProps({ categories }) {
  return {
    catgries: categories.categories,
  };
}

export default connect(mapStateToProps)(CategoryHeaderContainer);
