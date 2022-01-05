import React, { useState }from 'react'
import Router from './routes/Router'
import { createGlobalStyle } from 'styled-components'
import {GlobalState} from './contexts/GlobalContext/GloboState'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 100vh;
    width: 100vw;
  }
  p {
    margin: 0;
  }
  /* width: 100vw;
  height: 100vh; */
  
  button{
    cursor:pointer;
    background: linear-gradient(to top, red ,yellow);
    width: 100px;
    height: 40px;
    border-radius: 40px;
  }
  /* Outros estilos globais */
`;

function App() {

  return (
    <GlobalState>
      <div>
        <GlobalStyle />
        <Router />
      </div>
    </GlobalState>
  )
}

export default App;
