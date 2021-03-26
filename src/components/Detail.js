import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPokemon } from './../api/api';

const Detail = ({ data }) => {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        background: green;
        margin: 5px;
    `

    const [pokemon, setPokemon] = useState({});
    const [type, setType] = useState(null);

    const getType = (data) => {
        if (data) {
            setType(data[0].type.name)
        }
    }


    useEffect(() => {
        getPokemon(data.url).then(({ data }) => {
            setPokemon(data)
            getType(data?.types)
        }).catch(err => console.error(err))
    }, [])

    return (
        <Container>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name}></img>
            <div>{pokemon?.name}</div>
            <div>{type}</div>
        </Container>
    );
};

export default Detail;