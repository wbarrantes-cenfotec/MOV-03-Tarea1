import React from 'react';
import { View } from 'react-native';
import AlbumListClass from '../../organism/AlbumListClass';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <AlbumListClass />
      </View>
    );
  }
}