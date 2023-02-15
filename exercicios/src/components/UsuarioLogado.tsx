import React from 'react';
import { Text } from 'react-native';
import Style from './style';

import If from './If';

export default ({usuario = {}}) => {

  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Style.textBig}>Usuário logado:</Text>
        <Text style={Style.textBig}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  )
}