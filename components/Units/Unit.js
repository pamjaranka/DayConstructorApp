import React from 'react';
import {Text, View} from 'react-native';

function Unit(props) {
  const {name} = props;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default Unit;
