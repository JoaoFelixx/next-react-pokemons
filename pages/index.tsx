import type { NextPage } from 'next'
import { Header, Pokemons } from 'components';
import { PokemonProvider } from 'Context/pokemon-provider';
import { IconContext } from 'react-icons';
import { iconSettings } from 'styles/iconSettings'
import { GlobalTheme } from 'styles/GlobalTheme';

const Home: NextPage = () => {
  return (
    <PokemonProvider>
      <IconContext.Provider value={iconSettings}>
        <GlobalTheme />
        <Header title='Pokédex' description='Pesquise seu pokemon favorito' />
        <Pokemons />
      </IconContext.Provider>
    </PokemonProvider>
  )
}

export default Home;