import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext/GlobalStateContext';
import { goToHome, goToPokedex } from '../routes/coordinator';
import { CardDiv, HeaderDiv } from './Styled';

function DetailsPage() {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  // const { pokemon, getPokemons } = useContext(GlobalContext);
  const getPokeById = async (id) => {
    if (id) {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        console.log(res.data);
        setState(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  // useEffect(() => {
  //   getPokemons();
  // }, []);

  useEffect(() => {
    getPokeById();
  });
  // const detailsPokemon = pokemon.map((poke) => {
  //   return <h1>{poke.name}</h1>;
  // });

  console.log(state);

  const detailsPokemon = state.map((item) => {
    return (
      <div>
        <h1>{item && item.name}</h1>
        <h1>{item && item.id}</h1>
      </div>
    );
  });

  return (
    <>
      <HeaderDiv>
        <button
          onClick={() => {
            goToHome(navigate);
          }}
        >
          Pokemon
        </button>
        <button
          onClick={() => {
            goToPokedex(navigate);
          }}
        >
          Pokedex
        </button>
      </HeaderDiv>
      <CardDiv>
        {detailsPokemon}
        Details
      </CardDiv>
    </>
  );
}

export default DetailsPage;
