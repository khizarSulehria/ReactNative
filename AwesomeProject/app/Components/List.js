import React,{Component} from 'react';
import {View,StyleSheet,FlatList,Text } from 'react-native';
class List extends Component {
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View>
                <FlatList 
                    data={this.props.todoList}
                     renderItem={({item,index})=> {
                          return( <Text>  {item}  </Text>);  
                    }}

                />
            </View>
   
        );
    }


}
const data = [
    "data1",
    "data2",
    "data3",
    "data4",
    "data5",
    "data6",
];

export default List