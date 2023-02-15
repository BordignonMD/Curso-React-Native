import React from 'react';
import { View, Text } from 'react-native';
import Style from './style';

export default props => {
  return (
    <View>
      <Text style={Style.textBig}>O resultado é:</Text>
      {props.num % 2 === 0
        ? <Text style={Style.textBig}>Par</Text>
        : <Text style={Style.textBig}>Ímpar</Text>
      }
    </View>
  )
}