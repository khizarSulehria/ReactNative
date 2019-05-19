import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View,Image,
  Dimensions,
  TouchableOpacity} from 'react-native';
import Config from '../../config/index';
import { PostFeed } from '../container';

export default class MainFeed extends Component {
  
    render() {
        return (
          <View >
            <View style={ styles.tempNav } >  
                <Text >Instagram</Text>
            </View>
            <PostFeed />
          </View>
        );
      }
}

const styles = StyleSheet.create({
    tempNav: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      height : 50,
      paddingTop:20
    },
    userBar : {
        flexDirection:'row',
        height : 40,
        alignItems: 'center',
        width : 100 + "%",
        justifyContent : "space-between",
        alignItems: 'center',
        paddingLeft : 5,
        paddingRight : 5,
        borderColor: '#f0f3f3',
        borderBottomWidth : 1

    },
    userPic : {
        width: 30,
        height: 25,
        borderRadius: 25
    },
    iconBar : {
      height : 40,
      flexDirection : 'row',
      borderColor: '#f0f3f3',
      borderBottomWidth : 1,
      alignItems: 'center'
      
    },
    likesBar : {
      height : 40,
      flexDirection : 'row',
      borderColor: '#f0f3f3',
      borderBottomWidth : 1,
      alignItems: 'center'
    },
    icon : {
      marginLeft : 10
    }

  });
  