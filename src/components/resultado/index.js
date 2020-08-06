import React from 'react';
import {Container, Title, Icon, Text, Link } from './styles';
import imgBoi from '../../assets/icons/boi.png'



export default function Inicio(props) {
  return (
    <Container display={props.isActive}>
      <Title>Guam.pu.do</Title>
      <Icon src={imgBoi}></Icon>
      <Text>Sim, você foi diagnosticado com o Cornovírus</Text>
      <Link href="/">Voltar ao menu inicial</Link>
    </Container>
  );
}