import styled from 'styled-components';

interface PokemonType {
  type: string;
}

interface Index {
  [index: string]: string;
  default: string;
}

const types: Index = {
  'fire': '#fa2727',
  'water': '#458af1',
  'grass': '#1bd42a',
  'poison': '#f83ff8',
  default: '#777777',
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
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
    position: relative;
    transition: 1.5s;
    cursor: pointer;
    top: -1em;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
 
`;

const ID = styled.p`
  color: #7D7D7D;
  font-weight: bold;
  align-self: start;
`;

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

const Spin = styled.div`
  border: 16px solid transparent;
  border-radius: 50%;
  border-top: 16px solid #E3350D;
  width: 120px;
  height: 120px;

  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
  ID, Flex, Spin, Card, Type, Info,
};