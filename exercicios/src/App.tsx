import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import Comp, {Comp1, Comp2} from './components/Multi';
// import Primeiro from './components/Primeiro';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Title from './components/Title';
// import Button from './components/Button'
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import Quadrado from './components/layout/Quadrado';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega'

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdeNumeros={7}/>
    {/* <Aleatorio  min={1} max={60}/>
    <FlexboxV4 />
    <FlexboxV3 />
    <FlexboxV2 />
    <FlexboxV1 />
    <Quadrado />
    <Quadrado cor='#900'/>
    <Quadrado cor='#090'/>
    <Quadrado cor='#009'/>
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{nome: 'Matheus', email: 'matheusdb_@outlook.com'}}/>
    <UsuarioLogado usuario={{nome: 'Matheus'}}/>
    <Familia>
      <Membro nome="Isaura" sobrenome="Deon"/>
      <Membro nome="Regina" sobrenome="Deon"/>
    </Familia>
    <Familia>
      <Membro nome="Isaura" sobrenome="Bordignon"/>
      <Membro nome="Regina" sobrenome="Bordignon"/>
    </Familia>
    <ParImpar num={3}/>
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Pai />
    <Contador />
    <Contador inicial={100} passo={13}/>
    <Button />
    <Title principal="Cadastro Produto" secundario="Tela de Cadastro do Produto" />
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/> */}
    {/* <MinMax min="3" max="20"/> */}
    {/* <Comp />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})
