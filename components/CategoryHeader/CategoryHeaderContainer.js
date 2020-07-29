import React from 'react';
import CategoryHeaderPresenter from './CategoryHeaderPresenter';
import { categories } from '../../dummy';

const CategoryHeaderContainer = ({ currentTab, handleCategoryChange }) => {
  return (
    <CategoryHeaderPresenter
      currentTab={currentTab}
      handleCategoryChange={handleCategoryChange}
      categories={categories}
    />
  );
};

export default CategoryHeaderContainer;
