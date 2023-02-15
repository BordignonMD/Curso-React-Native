import React from 'react';
import { Text } from 'react-native';
import Style from '../style';

import produtos from './produtos';

export default props => {

  function obterLista() {
    return produtos.map(p => {
      return <Text key={p.id}>{p.id}) {p.nome} tem preço R$ {p.preco}</Text>
    })
  }

  return (
    <>
      <Text style={Style.textBig}>Lista de Produtos</Text>
      {obterLista()}
    </>
  )
}