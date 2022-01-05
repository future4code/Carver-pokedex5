import React, { useEffect, useContext, useState } from "react";
import { DivMain, DivHeader, DivPoke, DivCard, Img } from "./Styled";
import { goToPokedex, goToDetails } from "../routes/coordinator"
import { useNavigate } from 'react-router-dom'
import {GlobalContext} from "../contexts/GlobalContext/GlobalStateContext";

const HomePage = () => {

  const navigate = useNavigate()

  const {pokemon, getPokemons} = useContext(GlobalContext)
  const {pokedex, setPokedex} = useContext(GlobalContext)
  const {addPokemonToPokedex} = useContext(GlobalContext)
  
  useEffect(() => {
    getPokemons()
  }, [])

  useEffect(() => {
    const renderPokeList = pokemon.map((poke, index) => {
      return (
        <DivCard key={index}>
          <Img src={poke.sprites.front_default} alt={poke.name} />
          <h3>{poke.name}</h3>
          <button onClick={() => addPokemonToPokedex(poke, index)}>Adicionar</button>
          <button onClick={() => goToDetails(navigate)}>Detalhes</button>
        </DivCard>
      )
    })
  }, [pokedex])

  const renderPokeList = pokemon.map((poke, index) => {
    return (
      <DivCard key={index}>
        <Img src={poke.sprites.front_default} alt={poke.name} />
        <h3>{poke.name}</h3>
        <button onClick={() => addPokemonToPokedex(poke, index)}>Adicionar</button>
        <button onClick={() => goToDetails(navigate)}>Detalhes</button>
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