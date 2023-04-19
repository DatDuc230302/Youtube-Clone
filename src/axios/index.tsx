import axios from 'axios';

export const getApi = (URI) => {
    return axios.get(URI);
};
