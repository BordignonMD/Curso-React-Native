import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default props => {
  const aleatorio = parseInt(Math.random() * (props.max - props.min + 1)) + props.min;

  return <Text style={Style.textBig}>O valor aleatório é {aleatorio}</Text>
}