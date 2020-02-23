import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoieWVsbG9hbGVqbyIsImEiOiJjazZ5a3dsMDgwczJnM2RydmNzcTBkaGRjIn0.J9D7xNL8jRLwm69F4ga9Og',
);
var {height} = Dimensions.get('window');

export default class Map extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: height,
  },
  map: {
    flex: 1,
  },
});
