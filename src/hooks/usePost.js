import { useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const usePost = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const postData = async (url, data) => {
        setIsLoading(true);
        try {
        const response = await axios.post(`${baseURL}${url}`, data);
        setResponse(response.data);
        } catch (error) {
        setError(error);
        } finally {
        setIsLoading(false);
        }
    };

    return { postData, response, error, isLoading };
};

export default usePost;
