import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function Category(props) {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{
        uri: props.background_image,
      }}>
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 1,
  },
});
export default Category;
