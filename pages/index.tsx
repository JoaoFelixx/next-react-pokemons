import React from 'react';
import type { NextPage } from 'next'
import { Header, Pokemons, Footer } from 'components';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header title='Pokédex' description='Pesquise seu pokemon favorito' />
      <Pokemons />
      <Footer />
    </React.Fragment>
  )
}

export default Home;