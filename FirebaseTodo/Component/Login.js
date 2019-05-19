import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';



  export default class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        email : '',
        password : '',
      }
    }
  
  
    _onPressButton = () => {
      
      let email = this.state.email;
      let password = this.state.password;
      
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        
        alert(""+this.state.email+" => "+this.state.password);
        this.props.isAuthicate(true);
      })
      .catch(function(error) {
        this.props.isAuthicate(true);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }
    render() {
      return (
        <View>
          <Text>Welcome to my awesome app!</Text>
          <TextInput 
          placeholder="Email"
          onChangeText={ (email)=> { this.setState({email})  } }
          value={this.state.email}
  
          />
           <TextInput 
          placeholder="Password"
          onChangeText={ (password)=> { this.setState({password})  } }
          value={this.state.password}
          />
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.btnSignin}>
              <Text >Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    btnSignin : {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    }
  });
  