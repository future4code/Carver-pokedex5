import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import PokedexPage from '../PokedexPage/PokedexPage';
import DetailsPage from '../DetailsPage/DetailsPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/detalhes/:name/" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
