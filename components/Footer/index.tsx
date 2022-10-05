import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import PokemonBall from 'assets/pokeballsvg.png'; 
import { Foot, Flex } from './style';

export function Footer() {
  return (
    <Foot>
      <Flex>
        <Image 
          alt="PokeBall"
          width='100px' 
          height='100px' 
          src={PokemonBall} />
        <div>
          <h1>Pokemon info</h1>
          <p>API Pokemon: <code>https://pokeapi.co/</code></p>
          <p>
            <Link href='https://felixdeveloper.netlify.app'>
              Developer Contact 
            </Link>
          </p>
        </div>
      </Flex>
    </Foot>
  )
}