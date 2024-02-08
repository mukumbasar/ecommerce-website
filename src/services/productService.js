import axios from 'axios';

export const getProducts = () => {
    return axios.get("https://dummyjson.com/products")
        .then(res => {
            return res.data.products;
        })
        .catch(error => {
            throw error;
        });
};
