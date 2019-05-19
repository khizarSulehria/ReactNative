import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Config from '../../config/index';


export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
          screenWidth : Math.floor(Dimensions.get('window').width)
        };
        
    }
    onPress = () => {
      alert("Clicked")
    }

    render() {
      const imageURI = ((this.props.thisItem % 2 ==  0) ?  require('../../../img/cute-puppy.jpg') : require('../../../img/wallpaper.jpg') );

        return (
            <View>
                <View style={ styles.userBar } >  
                    <View style={{ flexDirection:'row',alignItems: 'center' }}>
                        <Image source={require('../../../img/cute-puppy.jpg')}
                        style={styles.userPic} />
                        <Text > Khizar Jawaid </Text>
                    </View>
                    <View  >
                        <Text style={{ fontSize: 20,fontWeight: "bold" }} > ...</Text>
                    </View>
                </View>
                <View >  
                    <TouchableOpacity 
                    onPress={this.onPress}
                    >
                      <Image source={imageURI}
                      style={{width: this.state.screenWidth, height: 450}} />
                    </TouchableOpacity>
                </View>
                <View style={ styles.iconBar } >  
                    <Image source={ Config.images.heartIcon }
                    style={[styles.icon,{width: 20, height: 20}]} />
                    <Image source={ Config.images.bubbleIcon }
                    style={[styles.icon,{width: 20, height: 20}]} />
                    <Image source={ Config.images.arrowIcon }
                    style={[styles.icon,{width: 20, height: 20}]} />
                </View>
                <View style={ styles.likesBar } >  
                    <Image source={ Config.images.heartFilled }
                    style={[styles.icon,{width: 15, height: 15}]} />
                    <Text style={{ fontWeight: "bold"}}> 128 Likes</Text>
                </View>
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
  