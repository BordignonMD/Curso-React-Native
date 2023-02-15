import React from 'react';
import { Text } from 'react-native';
import Style from '../style';

export default props => {

  return (
    <>
      <Text style={Style.textBig}>
        {props.nome} {props.sobrenome}
      </Text>
    </>
  )
}