import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPokeList } from './../api/api';
import Detail from './Detail';

const List = () => {
  const Div = styled.div`
    height: 100%;
  `;
  const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  `;

  const [data, setData] = useState([]);

  useEffect(() => {
    getPokeList(0, 10).then(({ data }) => setData(data?.results));
  }, []);

  return (
    <Div>
      <Ul>
        {data ? (
          data.map((poke) => {
            return (
              <li key={poke.name}>
                <Detail data={poke} />
              </li>
            );
          })
        ) : (
          <li>Loading...</li>
        )}
      </Ul>
    </Div>
  );
};

export default List;
