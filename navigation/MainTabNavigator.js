import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TestScreen from '../screens/TestScreen';



const HomeStack = createStackNavigator({
  Home: TestScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Test',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,

});
