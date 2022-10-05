import React, { useMemo } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useSelectorPokemon } from 'Context/pokemon-provider';
import { PokemonsIndividual } from 'interfaces';

type PokemonMemorized = PokemonsIndividual | undefined;

function Pokemon() {
  const { id } = useRouter().query;
  const { pokemons } = useSelectorPokemon();

  const pokemon = useMemo<PokemonMemorized>(() => {
    const pokemonSelected = pokemons.find(({ id: _id }) => _id === Number(id));

    return pokemonSelected;
  }, [pokemons, id]);

  return (
    <div>
      {id}
    </div>
  )
}

export default Pokemon;