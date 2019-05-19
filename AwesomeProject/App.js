/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import LotsOfGreetings from './LotsOfGreetings.js';
import Title from './app/Components/Title';
import Input from './app/Components/Input';
import List from './app/Components/List';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
        todo: []
    };
}
  updateTodoList = (Item) => {
      let todo = [...this.state.todo];
      todo.push(Item);
      this.setState({
        todo
    });
  }


  render() {
    return (
      <View style={styles.container}> 
        <Title />
        <Input updateTodoList={this.updateTodoList}/>
        <List todoList={this.state.todo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
