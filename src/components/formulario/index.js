import React from 'react';
import {Container, Title, Icon, Button} from './styles';
import imgLupa from '../../assets/icons/lupa.png'



export default function Inicio(props) {
  return (
    <Container display={props.isActive}>
      <Title>Guam.pu.do</Title>
      <Icon src={imgLupa}></Icon>
      <Button onClick={() => props.isActiveFormFunction()}>FAÇA O TESTE</Button>
    </Container>
  );
}