import styled from 'styled-components';

export const SubTitle = styled.h2 `
    color: #303C5A;
    font-size: 36px;
    margin: 0px;
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background: #FFFFFF;
    height: 100%;
    width: 100%;
`

export const ContainerSintomas = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30%;
`

export const ContainerTitle = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 10%;
    margin: 20px;
`

export const ContainerSintoma = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

`

export const TextSintoma = styled.p `
    font-size: 20px;
    color: #777777;
    width: auto;
    font-family: 'Gudea', sans-serif;
    font-weight: bold;
`


export const Image = styled.img `
    height: auto;
`

export const Button = styled.a `
    margin: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    border: 1px solid #464F6E;
    border-radius: 4px;
    background: linear-gradient(to right, #464F6E, #303C5A); 
    font-weight: bold;
    color: #FFFFFF;
    height: auto;
    letter-spacing: 1.25px;
   
    cursor: pointer;
    text-decoration: none;
`