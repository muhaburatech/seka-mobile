import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import HomeScreenPresenter from './HomeScreenPresenter';

function Home({ products }) {
  console.disableYellowBox = true;
  const [currentTab, setCurrentTab] = useState('All');

  const [featuredProducts, setFeaturedProducts] = useState(() => {
    return products.filter((product) => product.is_featured === true);
  });

  const [bestSellingProducts, setBestSellingProducts] = useState(() => {
    return products.sort((a, b) => {
      return a.number_of_sales > b.number_of_sales ? 1 : -1;
    });
  });

  useEffect(() => {
    const productsCopy = [...products];
    const productsInCurrentCategory =
      currentTab === 'All'
        ? productsCopy
        : productsCopy.filter((product) => {
            return product.category.name === currentTab;
          });

    setFeaturedProducts(
      productsInCurrentCategory.filter(
        (product) => product.is_featured === true
      )
    );
    setBestSellingProducts(
      productsInCurrentCategory.sort((a, b) => {
        return a.number_of_sales > b.number_of_sales ? 1 : -1;
      })
    );
  }, [currentTab, products]);

  const _handleCategoryChange = (activeTab) => {
    setCurrentTab(activeTab);
  };

  return (
    <HomeScreenPresenter
      currentTab={currentTab}
      products={products}
      featuredProducts={featuredProducts}
      bestSellingProducts={bestSellingProducts}
      handleCategoryChange={_handleCategoryChange}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(Home);
