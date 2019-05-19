import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Greeting from './Greeting.js';

class LotsOfGreetings extends Component {
    render() {
        return (
          <View style={{alignItems: 'center'}}>
            <Greeting  name="khizar" />
            
          </View>
        );
      }
}
export default LotsOfGreetings;