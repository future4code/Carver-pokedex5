import React, { useState, useEffect } from 'react'
import  {GlobalContext} from './GlobalStateContext'
import axios from 'axios'

export const GlobalState = (props) => {

    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])

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

      const addPokemonToPokedex = (poke, index) => {
        const addPokedex = [...pokedex, poke]
        setPokedex(addPokedex)
        pokemon.splice(index, 1)
      }

    return (
        <GlobalContext.Provider value={{pokemon, getPokemons, pokedex, setPokedex, addPokemonToPokedex}}>
            {props.children}
        </GlobalContext.Provider>
    )
}