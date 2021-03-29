import React from 'react';
import logo from '../assets/pokeapi.png';
import { Logo, Menu } from './styles';

const Header = () => {

    return (
        <Menu>
            <Logo src={logo} alt="logo" />
        </Menu>
    );
};

export default Header;
