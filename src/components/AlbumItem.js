import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AlbumItem = ({item, isEven}) => {
  return (
    <View style={isEven ? styles.container : styles.containerDark}>
      <Text style={isEven ? styles.title : styles.titleDark}>
        Album: {item.title}
      </Text>
      <Image style={styles.images}
        source={{uri: item.photo[0].thumbnailUrl}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignItems: 'center'
  },
  containerDark: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 6,
    paddingHorizontal: 6,
    backgroundColor: '#333',
    alignItems: 'center'
  },
  label: {
    color: '#a3a3a3',
  },
  labelDark: {
    color: '#f1f1f1',
  },
  title: {
    color: '#333',
  },
  titleDark: {
    color: '#ccc',
  },
  images: {
    width: 75,
    height: 75,
  }
});

export default AlbumItem;