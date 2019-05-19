/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';

import Login from './Login';
import Todo from './Todo';
import Router from './Router';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth : false
    };
  }


  

  isAuthicate = (isauth = false) => {
    console.log("lOGIN")
    this.setState({
      auth : isauth
    });

  }

  loadComponent = () => {
    if(this.state.auth){
      return (<Todo />);
     }else{
       return (<Login isAuthicate={this.isAuthicate}/>)
     } 
  }

  render() {
    // this.loadComponent() 
    return (
   
        <Router />
      
    );
  }
}


