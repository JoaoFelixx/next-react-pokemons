import React from 'react';
import { Head, Title, Flex, SubTitle } from './style';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <Head>
      <Flex>
        <Title>{title} </Title>
        <MdOutlineCatchingPokemon color='#E3350D' />
      </Flex>
      <SubTitle>{description}</SubTitle>
    </Head>
  )
}