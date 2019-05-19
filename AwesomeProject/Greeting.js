import React, {Component} from 'react';
import { Text, View,TextInput } from 'react-native';


class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : ''
        }
    }

    textChange = (text) => {
       this.setState({
        text
       });
    }
    render() {
      return (
        <View style={{alignItems: 'center'}}>
            <TextInput 
             placeholder="Type here to translate!"
             onChangeText={this.textChange}
             value={this.state.text}
            />

          <Text>{this.state.text}</Text>
        </View>
      );
    }
  }
  export default Greeting;