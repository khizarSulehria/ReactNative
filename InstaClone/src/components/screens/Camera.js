import React, {Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


export default class Camera extends Component {
    login = () => {
        alert("Login");
        this.props.navigation.navigate('main');
    }
    render() {
        return (
          <TouchableOpacity
                        onPress={this.login} 
                        style={{ flex : 1,
                        alignItems : "center",
                        justifyContent : "center",
                        width : 100 + "%",
                        height : 100 + "%",
                        }}
                        
                        >
              <Text >Camera Page</Text>
          </TouchableOpacity> 
        );
      }
}
