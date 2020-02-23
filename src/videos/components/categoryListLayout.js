import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function CategoryListLayout(props) {
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View>{props.children}</View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
});
export default CategoryListLayout;
