import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import PokemonBall from 'assets/pokeballsvg.png';
import InfoPanel from 'assets/info.png'
import { Foot, Flex } from './style';
import { useSelectorPokemon } from 'Context/pokemon-provider';

export function Footer() {
  const { loading } = useSelectorPokemon();

  return (
    <React.Fragment>
      {!loading && (
        <Foot>
          <Flex>
            <div>
              <h1>Pokemon info</h1>
              <p>API Pokemon: <code>https://pokeapi.co/</code></p>
              <p>Reference site: <code>https://www.pokemon.com/br/pokedex/</code></p>
              <p>
                <Link href='https://felixdeveloper.netlify.app'>
                  Developer Contact 
                </Link>
              </p>
            </div>
            <Image 
              src={InfoPanel} 
              alt="Painel de informações"
              width='300' />
          </Flex>
        </Foot>
      )}
    </React.Fragment>
  )
}