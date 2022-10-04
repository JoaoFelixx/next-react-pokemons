import type { NextPage } from 'next'
import Head from 'next/head';
import { Header, Pokemons } from 'components';
import { PokemonProvider } from 'Context/pokemon-provider';
import { IconContext } from 'react-icons';
import { iconSettings } from 'styles/iconSettings'
import { GlobalTheme } from 'styles/GlobalTheme';

const Home: NextPage = () => {
  return (
    <PokemonProvider>
      <IconContext.Provider value={iconSettings}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Pokédex with React/Next and Typescript" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>

        <GlobalTheme />
        <Header title='Pokédex' description='Pesquise seu pokemon favorito' />
        <Pokemons />
      </IconContext.Provider>
    </PokemonProvider>
  )
}

export default Home;