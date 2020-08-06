import React from 'react';
import {Container, Title, Icon, Text, Button } from './styles';
import imgMicro from '../../assets/icons/micro.png'



export default function Inicio(props) {
  return (
    <Container display={props.isActive}>
        <Title>Guam.pu.do</Title>
        <Text>Seu diagóstico está pronto!</Text>
        <Icon src={imgMicro}></Icon>
        <Button onClick={() => props.isActiveDiagFunction()}>CLIQUE AQUI</Button>
    </Container>
  );
}