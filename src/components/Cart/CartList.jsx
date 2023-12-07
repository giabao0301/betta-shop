import React from 'react';
import { FaTimes } from 'react-icons/fa';
import useCartContext from '../../store/cart-context';
import CartItem from './CartItem';
import CartAmount from './CartAmount';
import EmptyCart from './EmptyCart';
const CartList = () => {
    const { items, totalAmount, removeItem, addItem } = useCartContext();
    const hasItems = items.length > 0;

    const removeItemHandler = (id) => {
        removeItem(id);
    };
    const addItemHandler = (item) => {
        addItem({ ...item, amount: 1 });
    };
    return (
        <div className="bg-gray-100 pt-28">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            {hasItems ? (
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 overflow-y-scroll max-h-screen">
                        {items.map((item) => {
                            return (
                                <CartItem
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    new_price={item.new_price}
                                    amount={item.amount}
                                    onAddItem={addItemHandler.bind(null, item)}
                                    onRemoveItem={removeItemHandler.bind(null, item.id)}
                                />
                            );
                        })}
                    </div>
                    <CartAmount totalAmount={totalAmount} />
                </div>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
};

export default CartList;
