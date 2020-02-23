import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoieWVsbG9hbGVqbyIsImEiOiJjazZ5a3dsMDgwczJnM2RydmNzcTBkaGRjIn0.J9D7xNL8jRLwm69F4ga9Og',
);
MapboxGL.setConnected(true);

export default class Map extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 600,
    width: 350,
  },
  map: {
    flex: 1,
  },
});
