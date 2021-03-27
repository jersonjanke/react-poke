import React from 'react';
import styled from 'styled-components';
import logo from '../assets/pokeapi.png';

const Footer = () => {
  const Footer = styled.footer`
    background: #333;
    padding: 2em;
    flex-shrink: 0;
  `;
  const Img = styled.img`
    height: 48px;
  `;

  return (
    <Footer>
      <Img src={logo} alt="logo" />
    </Footer>
  );
};

export default Footer;
