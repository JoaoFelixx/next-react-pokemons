import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ID = styled.p`
  color: #7D7D7D;
  font-weight: bold;
  align-self: start;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 2em;
  padding: 0.8em;
  background-color: #ADADAD;

  &:hover {
    transition: 1s;
    cursor: pointer;
    padding: 1em 0.5em;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
 
`;

interface PokemonType {
  type: string;
}

interface Index {
  [index: string]: string;
}

const types: Index = {
  'fire': '#F00',
  'water': '#00F',
  'grass': '#0F0',
  'poison': '#F0F',
  default: '#777777',
}

const Info = styled.div`
  width: 100%;
  align-self: start;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  text-transform: uppercase;
  font-weight: bold;
  color: #FFF;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

const Type = styled.div<PokemonType>`
  width: 40%;
  padding: 0.2em;
  text-style: uppercase;
  background-color: ${props => types[props.type] || types.default};

  @media (425px <= width<= 890px) {
    width: 50%;
  }
`;

export {
  ID,
  Flex, 
  Card, 
  Type, 
  Info,
};