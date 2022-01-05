import React, { useEffect, useState } from "react";
import axios from 'axios'
import { DivMain, DivHeader, DivPoke, DivCard, Img } from "./Styled";
import { goToPokedex } from "../routes/coordinator"
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState([])

  const getPokemons = () => {
    const newPoke = []

    for(let i = 1; i <= 20; i++){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => {
        newPoke.push(res.data)
        if (newPoke.length === 20) {
          const orderedList = newPoke.sort((a, b) => {
          return a.id - b.id;
          });
          setPokemon(orderedList);
        } 
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    }
  }
  
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
        olá
      </DivPoke>
 
    </DivMain>
  )
}

export default HomePage