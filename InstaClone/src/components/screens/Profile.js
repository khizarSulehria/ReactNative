import React, {Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


export default class Profile extends Component {
    login = () => {
        alert("Login");
        this.props.navigation.navigate('login');
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
              <Text >Profile Page</Text>
          </TouchableOpacity> 
        );
      }
}
