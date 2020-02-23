import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Suggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={{
            uri: props.medium_cover_image,
          }}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{props.genres[0]}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.rating}>{props.rating} Estrellas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingHorizontal: 5},
  left: {},
  right: {
    paddingLeft: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  year: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderRadius: 6,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  genreText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 9,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default Suggestion;
