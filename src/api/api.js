import axios from 'axios';

export const getPokeList = (offset = 0, limit = 10) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
}

export const getPokemon = (url) => {
    return axios.get(url)
}