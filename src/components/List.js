import React from 'react';
import Detail from './Detail';
import styled from 'styled-components';

const List = () => {
    const Div = styled.div`
        height: 100%;
    `
    return (
        <Div>
            <h1>List</h1>
            <Detail />
        </Div>
    )
};

export default List;