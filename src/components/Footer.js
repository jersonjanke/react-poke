import React from 'react';
import logo from '../assets/pokeapi.png';
import { FooterComponentStyle, Logo } from './styles';

const Footer = () => {
  return (
    <FooterComponentStyle>
      <Logo src={logo} alt="logo" />
    </FooterComponentStyle>
  );
};

export default Footer;
