import React from 'react';
import { ContainerDetail } from './styles';

const Detail = ({ data }) => {
  return (
    <ContainerDetail>
      <img src={data?.sprites?.front_default} alt={data?.name}></img>
      <div>{data.name}</div>
    </ContainerDetail>
  );
};

export default Detail;
