import React, { createContext } from 'react';
import all_product from '../components/assets/all_product';
import { useContext } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const contextValue = { all_product };
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

const useShopContext = () => {
    return useContext(ShopContext);
};

export default useShopContext;
