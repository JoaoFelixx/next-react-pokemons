import React from 'react';
import { Head, Title, SubTitle } from './style';

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <Head>
      <Title>{title}</Title>
      <SubTitle>{description}</SubTitle>
    </Head>
  )
}