import React, { useEffect, useContext } from "react";
import { DivMain, DivHeader, DivPoke, DivCard, Img } from "./Styled";
import { goToPokedex } from "../routes/coordinator"
import { useNavigate } from 'react-router-dom'
import {GlobalContext} from "../contexts/GlobalContext/GlobalStateContext";

const HomePage = () => {

  const navigate = useNavigate()

  const {pokemon, getPokemons} = useContext(GlobalContext)
  
  useEffect(() => {
    getPokemons()
  }, [])

  const renderPokeList = pokemon.map((poke, index) => {
      return (
        <DivCard key={index}>
          <Img src={poke.sprites.front_default} alt={poke.name} />
          <h3>{poke.name}</h3>
          <button>Adicionar</button>
          <button>Detalhes</button>
        </DivCard>
      )
    })

  return (
    <DivMain>

      <DivHeader>
        <button onClick={() => goToPokedex(navigate)}>Ir para Pokedex</button>  
        <div>
          <p>Lista de Pokémons</p>
        </div>
      </DivHeader>
      
      <DivPoke>
        {renderPokeList}
      </DivPoke>
 
    </DivMain>
  )
}

export default HomePage