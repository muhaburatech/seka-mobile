import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import theme from '../../constants/theme';
import Block from '../Block';
import Text from '../Text';

export default class aBrowse extends React.Component {
  renderTab(tab) {
    const active = this.props.currentTab;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        style={[styles.tab, isActive ? styles.active : null]}
        onPress={() => this.props.handleCategoryChange(tab)}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const tabs = this.props.categories;
    const active = this.props.currentTab;

    const isActive = active === 'All';
    return (
      <Block
        style={{
          marginTop: 20,
        }}
      >
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Browse
          </Text>
        </Block>

        <Block flex={false} row>
          <ScrollView horizontal={true} style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, isActive ? styles.active : null]}
              onPress={() => this.props.handleCategoryChange('All')}
            >
              <Text size={16} medium gray={!isActive} secondary={isActive}>
                All categories
              </Text>
            </TouchableOpacity>
            {tabs.map((tab) => this.renderTab(tab.name))}
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: 0.5,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
});
