import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const fetchPersonaje = async () => {
    const response = await axios.get(`${API_URL}/character`);
    return response.data.results;
};

export const fetchPersonajeID = async (id) => {
    const response = await axios.get(`${API_URL}/character/${id}`);
    return response.data;
};

