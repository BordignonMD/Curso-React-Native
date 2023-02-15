import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import Style from './style';

export default props => {

  const [nome, setNome] = useState('teste')

  return (
    <>
      <View>
        <Text>{nome}</Text>
        <TextInput 
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(nome) => setNome(nome)}
        />
      </View>
    </>
  )
}