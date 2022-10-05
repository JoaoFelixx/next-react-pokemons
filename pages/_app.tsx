import React from 'react';
import Head from 'next/head';
import { IconContext } from 'react-icons';
import { GlobalTheme } from 'styles/GlobalTheme';
import { iconSettings } from 'styles/iconSettings'
import type { AppProps } from 'next/app'
import { PokemonProvider } from 'Context/pokemon-provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <IconContext.Provider value={iconSettings}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Pokédex with React/Next and Typescript" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>

        <GlobalTheme />
        <PokemonProvider>
          <Component {...pageProps} />
        </PokemonProvider>
      </IconContext.Provider>
    </React.Fragment>
  )
}

export default MyApp
