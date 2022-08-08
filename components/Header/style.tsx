import styled from 'styled-components';

const Head = styled.header`
  width: 100%;
  background-color: #adadad;
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  padding: 1em;
`;

const Title = styled.h2`
  color: #000;
`;

const SubTitle = styled.span`
  color: #000;
`;

export { Head, Title, SubTitle };