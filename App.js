import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './src/Router/Routes.js'
import SplashScreen from 'react-native-splash-screen';

class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }


   render() {
      return (
         <Routes />
      )
   }
}
export default App
AppRegistry.registerComponent('App', () => App)