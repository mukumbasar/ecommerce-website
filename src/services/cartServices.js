const addToCart = (products, setProducts, cart, setCart, cartItem) => {
    const existingItem = cart.find(item => item.id === cartItem.id);
    if (existingItem) {
        const updatedCart = cart.map(item => {
            if (item.id === cartItem.id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        setCart(updatedCart);

        const updatedProducts = products.map(product => {
            if (product.id === cartItem.id) {
                return { ...product, count: (product.count || 0) + 1 }; 
            }
            return product;
        });
        setProducts(updatedProducts);
    } else {
        setCart(prevCart => [...prevCart, { ...cartItem, count: 1 }]);
    }
};

const removeFromCart = (products, setProducts, cart, setCart, cartItem) => {
    const existingItem = cart.find(item => item.id === cartItem.id);
    
    if (existingItem) {
        if (existingItem.count > 1) {
            const updatedCart = cart.map(item => {
                if (item.id === cartItem.id) {
                    return { ...item, count: item.count - 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            const updatedCart = cart.filter(item => item.id !== cartItem.id);
            setCart(updatedCart);
        }

        const updatedProducts = products.map(product => {
            if (product.id === cartItem.id) {
                return { ...product, count: Math.max((product.count || 0) - 1, 0) };
            }
            return product;
        });
        setProducts(updatedProducts);
    }
};


export { addToCart, removeFromCart };
