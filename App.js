import React, {Component} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import Home from './src/screens/containers/home';
import Map from './src/screens/containers/map';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
type Props = {};
const Stack = createStackNavigator();
export default class App extends Component<Props> {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
