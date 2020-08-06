import React, {useState} from 'react';
import { Container, Button, ContainerSintomas, ContainerSintoma, Image, TextSintoma, ContainerTitle, SubTitle } from './styles';
import Footer from '../../components/footer/index'

import imgCabeca from '../../assets/icons/dordecabeca.png'
import imgCosta from '../../assets/icons/costa.png'
import imgConjutivite from '../../assets/icons/conjutivite.png'
import imgOlho from '../../assets/icons/olho.png'
import imgRelatorio from '../../assets/icons/relatorio.png'
import imgLupa from '../../assets/icons/lupa2.png'
export default function Inicio() {


  return (
    <Container>

        <ContainerTitle>
          <Image src={imgLupa}></Image>
          <SubTitle>Quais são os sintomas?</SubTitle>

        </ContainerTitle>


        <ContainerSintomas>
          
            <ContainerSintoma>
              <Image src={imgCabeca}></Image>
              <TextSintoma>Dores de cabeça</TextSintoma>
            </ContainerSintoma>

            <ContainerSintoma>
              <Image src={imgCosta}></Image>
              <TextSintoma>Dores nas costas</TextSintoma>
            </ContainerSintoma>

            <ContainerSintoma>
              <Image src={imgConjutivite}></Image>
              <TextSintoma>Baixa percepção</TextSintoma>
            </ContainerSintoma>

            <ContainerSintoma>
              <Image src={imgOlho}></Image>
              <TextSintoma>Lágrimas sem motivo</TextSintoma>
            </ContainerSintoma>

        </ContainerSintomas>


        <SubTitle style={{margin: '70px 0px 40px 0px'}} > Diagnóstico seguro, rápido e sigiloso </SubTitle>
        <Image src={imgRelatorio}></Image>
        <Button href="/exame">VERIFIQUE AQUI</Button>

        <Footer></Footer>
    </Container>
  );
}