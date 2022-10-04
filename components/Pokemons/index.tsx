import React, { useMemo } from 'react';
import Image from 'next/image';
import { useSelectorPokemon } from 'Context/pokemon-provider';
import { ID, Flex, Card, Type, Info } from './style';

interface Index {
  [index: string]: string | undefined;
}

export function Pokemons() {
  const { pokemons } = useSelectorPokemon();

  return (
    <Flex>
      {React.Children.toArray(
        pokemons.map((pokemon) => {

          const idFormatted = useMemo(() => {
            const numbers: Index = {
              '1': `N° 00${pokemon.id}`,
              '2': `N° 0${pokemon.id}`,
            }

            return numbers[pokemon.id.toString().length] || pokemon.id;;

          }, [pokemon])

          return (
            <Card
              key={pokemon.id}>
              <Image
                src={pokemon.sprites.front_default}
                alt={`Pokemon: ${pokemon.name}`}
                width={200}
                height={200} />
              <ID>{idFormatted}</ID>
              <p>{pokemon.name}</p>
              <Info>
                {React.Children.toArray(
                  pokemon.types.map((type) => {
                    return (
                      <Type
                        type={type.type.name}
                        key={pokemon.id}>
                        {type.type.name}
                      </Type>
                    )
                  })
                )}
              </Info>
            </Card>
          )
        })
      )}
    </Flex>
  )
}