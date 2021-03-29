import React, { useEffect, useState } from 'react';
import { getPokemon } from './../api/api';
import { Container } from './styles';

const Detail = ({ data }) => {
  const [pokemon, setPokemon] = useState({});
  const [type, setType] = useState(null);

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
    <Container type={type}>
      <img src={pokemon?.sprites?.front_default} alt={pokemon?.name}></img>
      <div>{pokemon?.name}</div>
      <div>{type}</div>
    </Container>
  );
};

export default Detail;
