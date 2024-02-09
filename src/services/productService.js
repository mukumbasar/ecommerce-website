import axios from 'axios';

export const fetchProducts = () => {
    return axios.get("https://dummyjson.com/products")
        .then(res => {
            return res.data.products;
        })
        .catch(error => {
            throw error;
        });
};

export const getProducts = (setProducts) => {
    fetchProducts()
        .then(productsData => {
            const productsWithCount = productsData.map(product => ({ ...product, count: 0 }));
            setProducts(productsWithCount);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
};

export const getPopularProducts = (products, setPopularProducts) => {
    const filteredProducts = products.filter(product => product.rating >= 4.5);
    setPopularProducts(filteredProducts);
};
