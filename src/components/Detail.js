import React from 'react';
import { ContainerDetail } from './styles';

const Detail = ({ data }) => {
  return (
    <ContainerDetail>
      <img src={data?.sprites?.front_default} alt={data?.name}></img>
      <h2>{data.name}</h2>
    </ContainerDetail>
  );
};

export default Detail;
