import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../../constants/Colors';

const CategoryHeaderPresenter = ({
  categories,
  handleCategoryChange,
  currentTab,
}) => {
  return (
    <ScrollView
      style={style.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Category
        currentTab={currentTab}
        handleCategoryChange={handleCategoryChange}
        text="All"
      />
      {categories.map((category) => {
        return (
          <Category
            currentTab={currentTab}
            handleCategoryChange={handleCategoryChange}
            key={category.id}
            text={category.name}
          />
        );
      })}
    </ScrollView>
  );
};

function Category({ text, handleCategoryChange, currentTab }) {
  return (
    <TouchableWithoutFeedback onPress={() => handleCategoryChange(text)}>
      <View style={[currentTab === text && style.tabActive]}>
        <Text style={[style.tab, currentTab === text && style.tabLinkActive]}>
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  tab: {
    padding: 20,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 1,
  },
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    marginRight: 10,
    borderColor: Colors.tabBar,
    marginBottom: 30,
  },
  tabActive: {
    borderBottomColor: 'tomato',
    borderBottomWidth: 3,
  },
  tabLinkActive: {
    color: 'tomato',
  },
});

export default CategoryHeaderPresenter;
