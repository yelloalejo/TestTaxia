import React, {Component} from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
navigator.geolocation = require('@react-native-community/geolocation');
import Geolocation from '@react-native-community/geolocation';
MapboxGL.setAccessToken(
  'pk.eyJ1IjoieWVsbG9hbGVqbyIsImEiOiJjazZ5a3dsMDgwczJnM2RydmNzcTBkaGRjIn0.J9D7xNL8jRLwm69F4ga9Og',
);
var {height} = Dimensions.get('window');

export default class Map extends Component {
  state = {
    location: null,
  };
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({location});
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.findCoordinates}>
            <Text style={styles.welcome}>Find My Coords?</Text>
            <Text>Location: {this.state.location}</Text>
          </TouchableOpacity>

          <MapboxGL.MapView style={styles.map} centerCoordinates={[]} />
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
