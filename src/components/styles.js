import styled from 'styled-components';
import { getTypeBgPokemon } from './../utils/utils';

export const Menu = styled.header`
  background: #ef5350;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const Logo = styled.img`
  height: 48px;
`;

export const FooterComponentStyle = styled.footer`
  background: #333;
  padding: 2em;
  flex-shrink: 0;
`;

export const Card = styled.div`
  height: 100%;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0.5em;
  background: #249483;
  height: 10em;
  width: 9em;
  box-shadow: 0px 0px 5px 2px #333;
  ${(props) => getTypeBgPokemon(props.type)};
  color: #fdc91b;

  #name {
      font-size: 1.6em;
      text-transform: capitalize;
      text-shadow: 0 0 2px #3861a6, 0 0 4px #3861a6;
  }
`;

export const DetailInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    font-size: 0.8em;
    text-transform: capitalize;
    text-shadow: 0 0 2px #3861a6, 0 0 4px #3861a6;
`
