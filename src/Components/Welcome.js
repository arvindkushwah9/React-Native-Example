import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Alert,TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';

export class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer} >
          <Text>Welcome</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => Actions.home()}>
          <Text style={styles.loginText}>Logout</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#3366FF",
  },
  
});

export default Welcome