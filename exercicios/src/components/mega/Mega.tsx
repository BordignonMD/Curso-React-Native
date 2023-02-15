import React from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import style from '../style';

import MegaNumero from './MegaNumero';

export default class Mega extends React.Component {

  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: []
  }

  alterarQtdeNumero = (qtde) => {
    this.setState({qtdeNumeros: +qtde})
  }

  gerarNumeroNoaContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;

    return nums.includes(novo) ? this.gerarNumeroNoaContido(nums) : novo;
  }

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
                      .fill()
                      .reduce((nums) => [...nums, this.gerarNumeroNoaContido(nums)], [])
                      .sort((a, b) => a - b)
    this.setState({numeros})
  }

  exibirNumeros = () => {
    const nums = this.state.numeros
    return nums.map(num => {
      return <MegaNumero key={num} num={num} />
    })
  }

  // gerarNumeros = () => {
  //   const {qtdeNumeros} = this.state
  //   const numeros = []

  //   for (let i = 0; i < qtdeNumeros; i++) {
  //     const n = this.gerarNumeroNoaContido(numeros)
  //     numeros.push(n)
  //   }

  //   numeros.sort((a, b) => a - b)

  //   this.setState({numeros})
  // }

  render(){
    return (
      <>
        <Text style={style.textBig}>
          Gerador de Mega-Sena
        </Text>
        <TextInput 
          style={{borderBottomWidth: 1}}
          keyboardType='numeric'
          placeholder="Qtde de números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button
          title="Gerar"
          onPress={this.gerarNumeros}
        />
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 20
        }}>
          {this.exibirNumeros()}
        </View>
      </>
    )
  }
}