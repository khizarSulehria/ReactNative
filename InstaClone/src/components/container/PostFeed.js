import React, {Component} from 'react';
import {
    FlatList
} from 'react-native';
import { Post } from '../presentation/index';



export default class PostFeed extends Component {
    constructor(props){
        super(props);
    }
    _renderItem = ({item}) => {
        return (
            <Post thisItem={item}  />
        );
    }
    _keyExtractor = (item) => item.toString();


    render() {
        return (
            <FlatList 
            data={[1,2,3,4,5,6,7,8,9,10,11,12]}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
        />    
        );
      }
}
