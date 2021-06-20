import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Screens/Homescreen';
import ResultScreen from './Screens/Resultscreen';
import AppHeader from './assets/AppHeader'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppNavigator /> 
      </View>
    );
  }
}

var AppNavigator = createAppContainer(
  createSwitchNavigator({
    screen1: HomeScreen,
    screen2: ResultScreen,
  })
);
