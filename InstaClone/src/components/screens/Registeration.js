import React, {Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';


export default class Registeration extends Component {
    constructor(props){
      super(props);
      this.state = {
        credentials : {
          email : "",
          password : ""
        }
      };
    }
    login = () => {
        
        fetch('http://192.168.142.2/InstaClone/register-user.php', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
          })
          .then((response) => response.json())
          .then((responseJson) => {

            if(responseJson.status === "success"){
                this.props.navigation.navigate('main');
                return;
              }
            alert("Error")
          })
          .catch((error) => {
            console.error(error);
          });
        //this.props.navigation.navigate('main');
    }
    onTextChange = (text,field) => {
           let newCredentials = Object.assign(this.state.credentials);
           newCredentials[field] = text;
           this.setState({
            credentials : newCredentials
           });
    }
    render() {
        return (
          <View style={{ flex : 1,
            alignItems : "center",
            justifyContent : "center",
            width : 100 + "%",
            height : 100 + "%",
            }}>

            <TextInput
             style={{height: 40, borderColor: 'gray', borderBottomWidth: 1,width : 100 + "%"}}
             onChangeText={(text) => this.onTextChange(text , "email")}
             value={ this.state.credentials.email }
             placeholder="abc@xyz.com"
             />
            <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1,width : 100 + "%"}}
             onChangeText={(text) => this.onTextChange(text , "password")}
             value={ this.state.credentials.password }
             placeholder="********"
             secureTextEntry={true}
             />
           <TouchableOpacity
                        onPress={this.login} 
                        style={{ flex : 1,
                        alignItems : "center",
                        justifyContent : "center",
                        width : 100 + "%",
                        height : 100 + "%",
                        }}
                        
                        >
              <Text >Create Account</Text>
          </TouchableOpacity> 
        </View>
          
        );
      }
}
