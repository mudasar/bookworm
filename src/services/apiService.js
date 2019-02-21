import axios from 'axios';

const apiUrl = 'http://localhost:3001/';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${apiUrl}api/auth`, credentials, { });
        return response;
    } catch (error) {
        return Promise.reject({ message: error.message, data: error.response.data, status: error.response.status, statusText: error.response.statusText });
    }

}