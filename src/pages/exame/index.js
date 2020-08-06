import React, {useState} from 'react';
import { Container } from './styles';

import Formulario from '../../components/formulario'
import Diagnostico from '../../components/diagnostico'
import Resultado from '../../components/resultado'
import Footer from '../../components/footer'

export default function Exame() {

  const [isActiveForm, setIsActiveForm] = useState(true)
  const [isActiveDiag, setIsActiveDiag] = useState(false)
  const [isActiveResu, setIsActiveResu] = useState(false)

  const isActiveFormFunction = () => {
    setIsActiveForm(!isActiveForm)
    setIsActiveDiag(!isActiveDiag)
  }


  const isActiveDiagFunction = () => {
    setIsActiveDiag(!isActiveDiag)
    setIsActiveResu(!isActiveResu)
  }


  const isActiveResuFunction = () => {
    
  }

  return (
    <Container>
      <Formulario isActiveFormFunction={isActiveFormFunction} isActive={isActiveForm}></Formulario>
      <Diagnostico isActiveDiagFunction={isActiveDiagFunction} isActive={isActiveDiag}></Diagnostico>
      <Resultado isActive={isActiveResu} ></Resultado>
      <Footer></Footer>
    </Container>
  );
}