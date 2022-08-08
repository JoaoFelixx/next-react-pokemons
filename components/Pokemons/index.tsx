import React from 'react';
import Image from 'next/image';
import { useSelectorPokemon } from 'Context/pokemon-provider';
import { FlexContainer, Card } from './style';

export function Pokemons() {
  const pokemons = useSelectorPokemon();

  return (
    <FlexContainer>
      {React.Children.toArray(
        pokemons.map((pokemon, index) => {
          return (
            <Card key={index}>
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={200}
                height={200}
                blurDataURL="data:..."
                placeholder="blur" />

              <p>{pokemon.name}</p>
            </Card>
          )
        })
      )}
    </FlexContainer>
  )
}