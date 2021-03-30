import React, { useEffect, useState, useRef } from 'react';
import { getPokemon } from './../api/api';
import { Container, DetailInfo } from './styles';
import Modal from './Modal';

const Detail = ({ data }) => {
    const [pokemon, setPokemon] = useState({});
    const [type, setType] = useState(null);
    const modal = useRef(null);

    const getType = (data) => {
        if (data) {
            setType(data[0].type.name);
        }
    };

    useEffect(() => {
        getPokemon(data.url)
            .then(({ data }) => {
                setPokemon(data);
                getType(data?.types);
            })
            .catch((err) => console.error(err));
    }, [data.url]);

    return (
        <Container type={type} onClick={() => modal.current.open()}>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name}></img>
            <div id="name">{pokemon?.name}</div>
            <DetailInfo>
                <div>
                    <span>Type: </span>
                    {type}
                </div>
                <div>
                    <span>Weight: </span>
                    {pokemon.weight}
                </div>
            </DetailInfo>
            <Modal ref={modal}>
                Hello World
            </Modal>
        </Container>
    );
};

export default Detail;
