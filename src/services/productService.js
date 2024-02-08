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

export const fetchProducts = (setProducts) => {
    getProducts()
        .then(productsData => {
            setProducts(productsData);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
};

export const fetchPopularProducts = (setProducts) => {
    getProducts()
        .then(productsData => {
            const popularProducts = productsData.filter(product => product.rating >= 4.5);
            setProducts(popularProducts);
        })
        .catch(error => {
            console.error("Error fetching popular products:", error);
        });
};
