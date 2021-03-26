import React from 'react';
import styled from 'styled-components';
import logo from '../assets/pokeapi.png';

const Header = () => {
  const Header = styled.header`
    background: #ef5350;
    height: 12vh;
    display: flex;
    align-items: center;
    padding: 5px;
  `;

  const Img = styled.img`
    height: 64px;
  `;

  return (
    <Header>
      <Img src={logo} alt="logo" />
    </Header>
  );
};

export default Header;
