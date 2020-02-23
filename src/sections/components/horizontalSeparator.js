import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HorizontalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : '#eaeaea',
        },
      ]}
    />
  );
}
const styles = StyleSheet.create({
  separator: {
    paddingHorizontal: 3,
  },
});
export default HorizontalSeparator;
