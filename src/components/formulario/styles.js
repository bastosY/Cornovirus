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
    margin: 20px 0px;
    font-size: 40px;
    color: #303C5A;
    font-family: 'Fugaz One', cursive;
` 

export const Icon = styled.img `
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
    width: auto;
    cursor: pointer;
`