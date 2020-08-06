import styled from 'styled-components';

export const Container = styled.div `
    display: ${(props) => props.display ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    height: 100%;
    width: 100%;
    
`

export const Title = styled.h2 `
    margin: 20px 0px 10px 0px;
    font-size: 40px;
    color: #303C5A;
    font-family: 'Fugaz One', cursive;
` 

export const Text = styled.p `
    margin: 30px 0px 20px 0px; 
    font-size: 48px;
    font-weight: bold;
    font-family: roboto;
    color: #303C5A;
    width: 45%;
    text-align: center;
`

export const Icon = styled.img `
    height: auto;
`

export const Link = styled.a `
    font-family: 'Gudea', sans-serif;
    color: #777777;
    text-decoration: none;
    :hover{
        text-decoration: underline
    }
`