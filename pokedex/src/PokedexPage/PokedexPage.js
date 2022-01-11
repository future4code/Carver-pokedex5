import React, { useEffect, useContext } from 'react';
import { goToHome, goToDetails } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext/GlobalStateContext';
import { DivMain, DivHeader, DivPoke, DivCard, Img } from '../HomePage/Styled';

export const PokedexPage = () => {
  const navigate = useNavigate();

  const { pokedex, setPokedex } = useContext(GlobalContext);
  const { removePokemonToPokedex } = useContext(GlobalContext);
  const pokedexLocalStorage = localStorage.getItem('Pokedex');
  const newList = JSON.parse(pokedexLocalStorage);

  useEffect(() => {
    if (localStorage.getItem('Pokedex')) {
      setPokedex(newList);
    }
  }, []);

  const removerPokemon = (itemToRemove) => {
    const index = pokedex.findIndex((i) => i.id === itemToRemove.id);
    console.log(index);
    const newPokemon = [...pokedex];
    console.warn(newPokemon);

    setPokedex(newPokemon);
  };

  const displayPokedex = pokedex.map((pokemons, index) => {
    return (
      <DivCard key={index}>
        <Img src={pokemons.sprites.front_default} alt={pokemons.name} />
        <h3>{pokemons.name}</h3>
        <div>
          <button onClick={() => removePokemonToPokedex(pokemons, index)}>
            Remover
          </button>
          <button onClick={() => goToDetails(navigate, pokemons.name)}>
            Ver detalhes
          </button>
        </div>
      </DivCard>
    );
  });

  return (
    <DivMain>
      <DivHeader>
        <div id="menu-pokedex">
          <div id="menu-horizontal">
            <button onClick={() => goToHome(navigate)}>Voltar</button>
            <h1 className="texto-pokedex">Pokedex</h1>
          </div>
        </div>
      </DivHeader>
      <DivPoke>{displayPokedex}</DivPoke>
    </DivMain>
  );
};

export default PokedexPage;
