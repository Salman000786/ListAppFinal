import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, Home, List, Search} from '../Screens/index';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import {connect} from 'react-redux';
import navigationStrings from '../constants/navigationStrings';
const Tab = createBottomTabNavigator();
function TabRoutes(props) {
  const {themeColor} = props;
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: !!themeColor ? themeColor : colors.themeColor,
      }}>
      <Tab.Screen
        name={navigationStrings.LIST}
        component={List}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.list}
              style={[styles.tabStyle,{tintColor: focused
                ? !!themeColor
                  ? themeColor
                  : colors.themeColor
                : colors.greyTextColor,}]}
            />
          ),
        }}
      />

      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.search}
              style={[styles.tabStyle,{tintColor: focused
                ? !!themeColor
                  ? themeColor
                  : colors.themeColor
                : colors.greyTextColor,}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.profile}
              style={[styles.tabStyle,{tintColor: focused
                ? !!themeColor
                  ? themeColor
                  : colors.themeColor
                : colors.greyTextColor,}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    // themeColor: state.auth.themeColor,
    themeColor: state.main.themeColor,
  };
};

export default connect(mapStateToProps)(TabRoutes);

const styles = StyleSheet.create({
  tabStyle:
  {
    width: 25,
    height: 25,
    marginTop: 10,
    
  }
});
