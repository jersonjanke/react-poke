import React, { useState, useEffect } from 'react';
import { getPokeList } from './../api/api';
import Card from './Card';
import { CardStyle, Ul, ContainerCenter, PrimaryButton } from './styles';

const List = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [more, setMore] = useState(24);

  useEffect(() => {
    getPokeList(0, more).then(({ data }) => setPokemonsData(data));
  }, [more]);

  const getMore = async () => {
    await setMore(more + 12);
    getPokeList(0, more).then(({ data }) => setPokemonsData(data));
  };

  return (
    <CardStyle>
      <Ul>
        {pokemonsData.results ? (
          pokemonsData.results.map((pokemon) => {
            return (
              <li key={pokemon.name}>
                <Card data={pokemon} />
              </li>
            );
          })
        ) : (
          <li>Not found any pokemon!</li>
        )}
      </Ul>
      <ContainerCenter>
        <PrimaryButton onClick={() => getMore()}>More</PrimaryButton>
      </ContainerCenter>
    </CardStyle>
  );
};

export default List;
