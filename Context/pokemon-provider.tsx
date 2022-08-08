import {
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react';
import { environments } from 'constants/environments';
import { Provider, PokemonsIndividual } from 'interfaces';

interface PokemonApiResult {
  results: [{
    name: string;
    url: string;
  }]
}

const Context = createContext<PokemonsIndividual[]>([]);

const useSelectorPokemon = () => useContext(Context);

function PokemonProvider({ children }: Provider) {
  const [pokemons, setPokemons] = useState<PokemonsIndividual[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(environments.URL_BASE_API + '/pokemon?limit=40');
        const pokemons: PokemonApiResult = await result.json();

        const pokemonsData = pokemons.results.reduce<Promise<PokemonsIndividual[]>>(async (acc, current) => {
          const data = await fetch(current.url);
          const pokemonsIndividuals: PokemonsIndividual = await data.json();

          (await acc).push(pokemonsIndividuals)

          return acc;
        }, Promise.resolve([]));

        setPokemons(await pokemonsData);
      } catch (error) {
        console.error(error)
      }
    })();
  }, [])

  return (
    <Context.Provider value={pokemons}>
      {children}
    </Context.Provider>
  )
}

export { PokemonProvider, useSelectorPokemon };