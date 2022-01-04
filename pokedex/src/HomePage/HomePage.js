import React, { useEffect, useState } from "react";
import axios from 'axios'
import { DivMain, DivHeader, DivPoke, DivCard, Img } from "./Styled";

const HomePage = () => {

  const [pokemon, setPokemon] = useState([])
  const [newPokemon, setNewPokemon] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then((res) => {
      setPokemon(res.data.results)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }, [])

  useEffect(() => {
    const newPoke = []

    pokemon.forEach((poke) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      .then((res) => {
        newPoke.push(res.data)
        if (newPoke.length === 20) {
          const orderedList = newPoke.sort((a, b) => {
            return a.id - b.id;
          });
          setNewPokemon(orderedList);
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
    })
    setNewPokemon(newPoke)
  }, [pokemon])

  console.log(newPokemon)
  console.log(pokemon)

  const renderPokeList = newPokemon.map((poke, index) => {
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
        <button>Ir para Pokedex</button>  
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