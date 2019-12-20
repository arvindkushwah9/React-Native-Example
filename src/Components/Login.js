import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Alert,TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Forgot from './Forgot';
import Registration from './Registration';
import Home from './Home';
import Welcome from './Welcome';
// import axios from 'axios';

export class Login extends Component {

	constructor(props){
    super(props);
    this.state = {
      email   : '',
      password: '',
    };
    this.loginUser = this.loginUser.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

	componentDidMount() {
    console.log('login*****************');
     // Actions.forgot()
  }

  loginUser() {
    const { email, password } = this.state;
    // this.setState({ error: '', loading: true });
    const headers = {
      'Content-Type': 'application/json'
     }
    var user = {user: {email: email, password: password}}
    // axios.post("http://192.168.1.8:3000/api/v1/sign_in", user,
    //   {
    //   	headers: headers
    // })
    // .then((response) => {
    //   console.log(response);
    //   alert(response.data.message)
    //   Actions.welcome()
    // })
    // .catch((error) => {
    //   console.log(error);
    //   this.onLoginFail();
    // });
  }

  onLoginFail() {
    this.setState({
      error: 'Login Failed',
      loading: false
    });
  }

  render() {
  	const { email, password, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;
    return (
     <View style={styles.container}>
     		<TouchableHighlight style={styles.buttonContainer} >
            <Text>Login</Text>
        </TouchableHighlight>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/64/000000/important-mail.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/64/000000/forgot-password.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.loginUser}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => Actions.home()}>
            <Text>Go to Home Page</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => Actions.register()}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
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
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
export default Login;