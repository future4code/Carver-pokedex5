import React from "react";
import './Stillo/Poke.css';
import { Link } from "react-router-dom";


export const PokedexPage = () => {

  return (
    <div>
      <header id="container-header">
        <div id="menu-pokedex">
          <div id="menu-horizontal">
            <h1 class="texto-pokedex">Pokedex</h1>
          </div>
        </div>
      </header>
      <br/>
      <main>
        <div class="pokemon-flex-container">
          <div class="item-pokemon-flex">
            <h3>Pokedex</h3>
            <p>Incriveis pokemons.</p>
            <div>
              <button className="botao-remover">Remover</button><Link to="/detalhes" className="botao-detalhes">Ver detalhes</Link>
            </div>
          </div>
        </div>
      </main>
      <footer id="container-footer">
        <p> Os melhores Pokemons estão aqui.</p>
      </footer>
    </div>
  )
}

export default PokedexPage;