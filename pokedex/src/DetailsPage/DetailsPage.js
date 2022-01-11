import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext/GlobalStateContext';
import { goToHome, goToPokedex } from '../routes/coordinator';
import {
  HeaderDiv,
  ImageCard,
  ImageContainer,
  MainContainer,
  MovesCard,
  SecondaryContainer,
  StatsCard,
  TypesCard,
} from './Styled';

function DetailsPage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const { pokemon, setPokemon } = useContext(GlobalContext);

  useEffect(() => {
    const pokeData = [];
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        pokeData.push(res.data);
        setPokemon(pokeData);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const pokemonImages = pokemon.map((poke, index) => {
    return (
      <ImageContainer>
        <ImageCard key={index}>
          <h3>Normal</h3>
          <img src={poke.sprites.front_default} alt={poke.name} />
          <img src={poke.sprites.back_default} alt={poke.name} />
        </ImageCard>
        <ImageCard key={index}>
          <h3>Shiny</h3>
          <img src={poke.sprites.front_shiny} alt={poke.name} />
          <img src={poke.sprites.back_shiny} alt={poke.name} />
        </ImageCard>
      </ImageContainer>
    );
  });

  const pokemonTypes = pokemon.map((poke, index) => {
    return (
      <TypesCard key={index}>
        <h2>Tipo</h2>
        <h3>
          {poke &&
            poke.types.map((type) => {
              return <p key={type.type.name}>{type.type.name}</p>;
            })}
        </h3>
      </TypesCard>
    );
  });
  const pokemonStats = pokemon.map((poke, index) => {
    return (
      <StatsCard key={index}>
        <h2>Atributos Base</h2>
        {poke &&
          poke.stats.map((stat) => {
            return (
              <p key={stat.stat.name}>
                <b>{stat.stat.name}</b>: {stat.base_stat}
              </p>
            );
          })}
      </StatsCard>
    );
  });
  const pokemonMoves = pokemon.map((poke, index) => {
    return (
      <MovesCard key={index}>
        <h2>Golpes</h2>
        {poke &&
          poke.moves.map((move, index) => {
            return index < 10 && <p key={move.move.name}>{move.move.name}</p>;
          })}
      </MovesCard>
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
      <MainContainer>
        {pokemonImages}
        {pokemonStats}
        <SecondaryContainer>
          {pokemonTypes}
          {pokemonMoves}
        </SecondaryContainer>
      </MainContainer>
    </>
  );
}

export default DetailsPage;
