import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Linking } from 'react-native';
import Card from './Card';

class AlbumDetail extends Component {
    constructor(props){
        super(props);
    }
    goToBuyNow = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }
    render(){
        return (
            <Card>
                <View style={ styles.cardHeader }>
                    <View  >
                        <Image
                            style={[styles.thumbnailImage, {width : 100 , height: 65}]}
                            source={{uri: this.props.albumObj.thumbnail_image}}
                            />
                    </View>
                    <View >
                        <Text style={{ fontSize:20 }}> { this.props.albumObj.artist } </Text>
                        <Text> { this.props.albumObj.title } </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={[ {width: 100 + "%", height: 250}]}
                        source={{uri: this.props.albumObj.image}}
                        />
                </View>
                <View>
                    <TouchableOpacity 
                    onPress={() => this.goToBuyNow(this.props.albumObj.url) }
                    style={ styles.cardBtn } >
                        <Text>Buy NOW</Text>
                    </TouchableOpacity>
                </View>
                
            </Card>
        )
    }

}

const styles = StyleSheet.create({
    card : {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding:6
    },
    cardHeader : {
        flexDirection : 'row',
        height : 70,
        alignItems : 'center'
    },
    thumbnailImage : {
        marginRight:5,
        borderRadius : 50
   },
   cardBtn : {
       width : 100 + "%",
       borderColor : "#47e4f3",
       borderWidth : 1,
       marginTop : 5,
       alignItems:'center',
       height: 30,
       justifyContent : 'center',
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,

   }
    
  });

export default AlbumDetail;