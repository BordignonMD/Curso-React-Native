import React from 'react';
import {Text} from 'react-native';

export default props => {

  return (
    <>
      <Text>[INÍCIO] Membros da Família</Text>
      {props.children}
      <Text>[FIM] Membros da Família</Text>
    </>
  )
}