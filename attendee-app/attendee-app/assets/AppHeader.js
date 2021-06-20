import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <LinearGradient colors={['#fff', 'yellow']}>
          <Text style={styles.text}>Attendence App</Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#AE0001',
  }, 
  text: {
    color: 'black',
    padding: 10,
    fontFamily: 'Matura MT Script Capitals',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
