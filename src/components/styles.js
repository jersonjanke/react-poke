import styled from 'styled-components';
import { getTypeBgPokemon } from './../utils/utils';

export const Menu = styled.header`
  background: #ef5350;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 48px;
`;

export const FooterComponentStyle = styled.footer`
  background: #333;
  padding: 2em;
  flex-shrink: 0;
`;

export const CardStyle = styled.div`
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
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  box-sizing: border-box;

  #modal-content {
    padding: 0.8em;
    background: #fff;
    height: 75vh;
    width: 75vw;
    border-radius: 12px;
  }

  #modal-close {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 12px;
    cursor: pointer;
  }
`;

export const PrimaryButton = styled.button`
  padding: 0.83m;
  margin: 5px;
  width: 124px;
  height: 36px;
  background: transparent;
  border: 2px solid #ef534f;
  color: #ef534f;
  box-shadow: 1px 0px 2px #333;
  outline: none;

  :hover {
    background: #ef5350;
    color: #fff;
  }
`;

export const ContainerDetail = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  img {
    width: 140px;
    height: 140px;
  }
`;
