import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const Header = styled.header`
        background: #ef5350;
        height: 6vh;
        display: flex;
        align-items: center;
        padding: 5px;
    `

    const Span = styled.span`
        font-size: 18px;
        color: #FFF;        
    `

    return (
        <Header>
            <Span>PokeApi</Span>
        </Header>
    )
}

export default Header;