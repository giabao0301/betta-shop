import React from 'react';
import { FaTrash } from 'react-icons/fa';
import useCartContext from '../../store/cart-context';

const CartItem = (props) => {
    const { removeAll } = useCartContext();

    const onRemoveHandler = () => {
        removeAll(props.id);
    };

    const new_price = `${props.new_price},000`;
    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={props.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0 lg:flex lg:flex-col lg:justify-between">
                    <h2 className="text-lg font-bold text-gray-900">{props.name}</h2>
                    <div className="flex items-center space-x-1">
                        <p className="text-lg font-bold">{new_price}</p>
                        <sup className="font-bold">₫</sup>
                    </div>
                    <div className="flex items-center border-gray-100">
                        <button
                            onClick={props.onRemoveItem}
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-primary hover:text-blue-50"
                        >
                            -
                        </button>
                        <div className="w-8 p-2">{props.amount}</div>
                        <button
                            onClick={props.onAddItem}
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-4 sm:mt-0">
                <button onClick={onRemoveHandler} className="text-gray-500 hover:text-red-500">
                    <FaTrash size={20} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
