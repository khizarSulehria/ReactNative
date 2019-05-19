import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    return (
        <View style={ styles.headerSection }><Text style={ styles.headerText }>{ props.headerText }</Text></View>
    );
}

const styles = StyleSheet.create({
    headerSection : {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerText: {
      fontSize: 20,
     },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

export default Header;