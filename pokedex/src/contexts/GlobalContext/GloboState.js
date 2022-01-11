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
              // localStorage.setItem('pokeList', JSON.stringify(pokemon))
            } 
          })
          .catch((err) => {
            console.log(err.response.data)
          })
        }
      }

      const addPokemonToPokedex = (poke, index) => {
        const addPokedex = [...pokedex, poke];
        setPokedex(addPokedex);
        console.log(addPokedex);
        pokemon.splice(index, 1);
        localStorage.setItem('pokeList', JSON.stringify(pokemon));
        localStorage.setItem('Pokedex',JSON.stringify(addPokedex));
      }

      const removePokemonToPokedex = (poke,index) =>{
        const removerPokedex = [...pokemon,poke];
        setPokemon(removerPokedex);
        pokedex.splice(index,1)
        pokemon.push(poke)
        localStorage.setItem('pokeList', JSON.stringify(pokemon))
        localStorage.setItem('Pokedex',JSON.stringify(pokedex))
      }

    return (
        <GlobalContext.Provider value={{pokemon, setPokemon, getPokemons, pokedex, setPokedex, addPokemonToPokedex,removePokemonToPokedex}}>
            {props.children}
        </GlobalContext.Provider>
    )
}