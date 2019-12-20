import React from 'react'
import { View, Text, TextInput, TouchableHighlight, Image, Alert,TouchableOpacity, StyleSheet } from 'react-native';

import { Actions } from 'react-native-router-flux';
import colors from "../Styles/color";

const Home = () => {
   const goToAbout = () => {
      Actions.about()
   }
   return (
   		<View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer} >
          <Text>Welcome</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => Actions.login()}>
          <Text style={styles.loginText}>Go To Login Page</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => Actions.register()}>
          <Text style={styles.setting}>Go To Registration Page</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => Actions.setting()}>
          <Text style={styles.setting}>Click me</Text>
        </TouchableHighlight>
      </View>
   )
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

export default Home