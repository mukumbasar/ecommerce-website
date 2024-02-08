const addToCart = (cart, setCart, cartItem) => {
    const existingItem = cart.find(item => item.id === cartItem.id);
    if (existingItem) {
        const updatedCart = cart.map(item => {
            if (item.id === cartItem.id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    } else {
        setCart(prevCart => [...prevCart, { ...cartItem, count: 1 }]);
    }
};

export { addToCart };
