import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default function Comp() {
  return <Text style={Style.textBig}>Comp #Oficial</Text>
}

export function Comp1() {
  return <Text style={Style.textBig}>Comp #01</Text>
}

export function Comp2() {
  return <Text style={Style.textBig}>Comp #02</Text>
}
