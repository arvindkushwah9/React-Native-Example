import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Components/Home.js'
import About from '../Components/About.js'
import Settings from '../Components/Settings.js'
import Forgot from '../Components/Forgot.js'
import Login from '../Components/Login.js'
import Registration from '../Components/Registration.js'
import Welcome from '../Components/Welcome.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
        <Scene key = "home" component = {Home} title = "Home" initial = {true} />
        <Scene key = "about" component = {About} title = "About" />
        <Scene key="setting" component={Settings}  />
        <Scene key="forgot" component={Forgot}  />
        <Scene key="login" component={Login}  />
        <Scene key="register" component={Registration}  />
        <Scene key="welcome" component={Welcome}  />
      </Scene>
   </Router>
)
export default Routes