import React, { Component } from 'react';
import { 
    Text, 
    View, 
    ActivityIndicator, 
    FlatList, 
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import AlbumItem from './AlbumItem';

export default class AlbumListClass extends Component {

    constructor(props) {
      super(props);

      this.state = {
        albums: [],
        loaded: false
      }
    }

    async fetchAlbums() {
      try {
        const albumsResult = await axios.get(
          'https://jsonplaceholder.typicode.com/albums',
        );

        const photosResult = await axios.get(
          'https://jsonplaceholder.typicode.com/photos',
        );

        const data = await albumsResult.data.map(album => ({
          ...album,
          photo: photosResult.data.filter(photo => photo.id === album.id)
        }));

        this.setState({ albums: data });
        this.setState({ loaded: true });
      } catch (error) {
        console.error(error);
      }
    }

    componentDidMount() {
      this.fetchAlbums();
    }

    render() {
      return (
        <View>
          {this.state.loaded ? (
            <FlatList
              data={this.state.albums}
              renderItem={({item, index}) => (
                <TouchableOpacity onPress={() =>
                  Actions.detail({
                    title: `${item.title}`,
                    photo: `${item.photo[0].url}`
                  })
                }>
                  <AlbumItem item={item} isEven={index % 2} />
                </TouchableOpacity>
              )}
            />
          ) : (
            <>
              <ActivityIndicator color="#000" />
              <Text>Loading...</Text>
            </>
          )}
        </View>
      );
    }
}