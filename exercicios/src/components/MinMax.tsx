import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default props => (
  <Text style={Style.textBig}>O valor {props.max} é maior que o valor {props.min}</Text>
)