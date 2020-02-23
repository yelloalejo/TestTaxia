import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function VerticalSeparator(props) {
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
    paddingVertical: 3,
    borderTopWidth: 1,
  },
});

export default VerticalSeparator;
