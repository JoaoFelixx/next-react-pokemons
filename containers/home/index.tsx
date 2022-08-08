import React from 'react';
import { Header, Pokemons } from 'components';
import { PokemonProvider } from 'Context/pokemon-provider';

export function Home() {
  return (
    <PokemonProvider>
      <Header title='Home Page' description='Welcome to application' />
      <Pokemons />
    </PokemonProvider>
  )
}