import styled from 'styled-components'

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;  
    height: 100vh;
    width: 100vw;
`

export const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const DivPoke = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-self: center;
    margin: 20px;
`

export const DivCard = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 250px;
`

export const Img = styled.img`
    width: 150px;
    height: 150px;
`