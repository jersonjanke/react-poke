import React, { useState, useEffect } from 'react';
import { getPokeList } from './../api/api';
import Detail from './Detail';
import { Card, Ul } from './styles'

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getPokeList(0, 1).then(({ data }) => setData(data?.results));
    }, []);

    return (
        <Card>
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
        </Card>
    );
};

export default List;
