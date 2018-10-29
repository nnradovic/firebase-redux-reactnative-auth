import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/auth/LoginScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

  Login: {screen: LoginScreen},
  Signup: {screen: SignUpScreen},
  ForgotPassword:{screen:ForgotPasswordScreen},
  
  Main: {screen: MainTabNavigator},
});