import styled from 'styled-components';

const Head = styled.header`
  width: 100%;
  background-color: #adadad;
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  padding: 1.5em 0;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: #000;
  margin-right: 0.2em;
`;

const SubTitle = styled.span`
  color: #000;
`;

export { Head, Flex, Title, SubTitle };