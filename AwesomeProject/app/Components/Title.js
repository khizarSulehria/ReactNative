import React, {Component} from 'react';
import { Text, View,StyleSheet } from 'react-native';

class Title extends Component {
    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.title} >Todo List</Text>
            </View>
        );
    }
}
export default Title;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
        padding: 15,
      },
      title: {
        textAlign: 'center',
        color: 'white',
      },
  });