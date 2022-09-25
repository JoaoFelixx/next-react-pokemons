import React, {
  useId,
  useState,
  useEffect,
  useCallback,
} from 'react';
import Image from 'next/image';
import { useSelectorPokemon } from 'Context/pokemon-provider';
import { PokemonsIndividual } from 'interfaces';
import { FlexContainer, Card } from './style';

type Images = Pick<PokemonsIndividual['sprites'], 'back_default' | 'front_default'> & { name: string };

export function Pokemons() {
  const { pokemons } = useSelectorPokemon();
  const [sideImage, setSideImage] = useState<'front' | 'back'>('front');
  const uuid = useId();

  const TurnImage = (({ back_default, front_default, name }: Images) => ({
    'front': <Image
      src={front_default}
      alt={`Pokemon: ` + name}
      width={200}
      height={200}
      blurDataURL="data:..."
      placeholder="blur" />,
    'back': <Image
      src={back_default}
      alt={`Pokemon: ` + name}
      width={200}
      height={200}
      blurDataURL="data:..."
      placeholder="blur" />,
  })[sideImage]);

  const turnImage = useCallback(() => {
    setInterval(() =>
      setSideImage(sideImage === 'front' ? 'back' : 'front'), 5000)
  }, [sideImage])

  useEffect(() => turnImage(), [turnImage]);

  return (
    <FlexContainer>
      {React.Children.toArray(
        pokemons.map((pokemon) => {
          return (
            <Card
              key={uuid}>
              <TurnImage
                back_default={pokemon.sprites.back_default}
                front_default={pokemon.sprites.front_default}
                name={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </Card>
          )
        })
      )}
    </FlexContainer>
  )
}