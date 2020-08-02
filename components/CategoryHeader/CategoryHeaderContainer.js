import React from 'react';
import { connect } from 'react-redux';
import CategoryHeaderPresenter from './CategoryHeaderPresenter';

const CategoryHeaderContainer = ({
  currentTab,
  handleCategoryChange,
  categories,
}) => {
  return (
    <CategoryHeaderPresenter
      currentTab={currentTab}
      handleCategoryChange={handleCategoryChange}
      categories={categories}
    />
  );
};

function mapStateToProps({ categories: { categories } }) {
  return {
    categories,
  };
}

export default connect(mapStateToProps)(CategoryHeaderContainer);
