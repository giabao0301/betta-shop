import React from 'react';
import { useContext } from 'react';

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

const useCartContext = () => {
    return useContext(CartContext);
};

export default useCartContext;
