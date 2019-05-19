import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import AlbumDetail from './AlbumDetail';
import axios from 'axios';


class AlbumList extends Component {
    constructor(props){
        super(props);
        this.state = {
            albumList : []
        };
        
    }
    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then((resp) => {
            console.log("resp",resp.data);
            this.setState({
                albumList : resp.data
            });
        })
        .catch((err) => console.log("errr",err))
    }
    renderAlbums() {
        return this.state.albumList.map(album =>
          <AlbumDetail key={album.title} albumObj={album} />
        );
      }

    render(){
        arr = [1,2,3,4,5];
        return (
            <View>

        <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
               
            </View>

            
        );
    }

}

export default AlbumList;