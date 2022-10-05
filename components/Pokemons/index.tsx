import React from 'react';
import Link from 'next/link';
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

          const idFormatted = (() => {
            const numbers: Index = {
              '1': `N° 00${pokemon.id}`,
              '2': `N° 0${pokemon.id}`,
            }

            return numbers[pokemon.id.toString().length] || pokemon.id;;
          })()

          return (
            <Link
              key={pokemon.id}
              href={`/pokemon/${pokemon.id}`}>
              <a>
                <div style={{ width: '100%' }}>
                  <Card>
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
                </div>
              </a>
            </Link>
          )
        })
      )}
    </Flex>
  )
}