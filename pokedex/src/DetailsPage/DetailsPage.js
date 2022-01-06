import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext/GlobalStateContext';
import { goToHome, goToPokedex } from '../routes/coordinator';
import { CardDiv, HeaderDiv } from './Styled';

function DetailsPage() {
  const navigate = useNavigate();
  const {name}  = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  })

  console.log(name)

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
        {details &&
          details.map((item) => {
            return (
              <div>
                <h1>{item && item.name}</h1>
                <h1>{item && item.id}</h1>
              </div>
            );
          })}
        Details
      </CardDiv>
    </>
  );
}

export default DetailsPage;
