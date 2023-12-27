import React, { useRef, useState } from 'react';
import Button from '../../UI/Button';
import { FaRegHeart } from 'react-icons/fa6';
import useCartContext from '../../../store/cart-context';

const ProductDisplay = (props) => {
    const { product } = props;
    const new_price = product ? `${product.gia / 1000},000` : '';
    const old_price = product ? `${(product.gia / 1000) + 50},000` : '';

    const [quantity, setQuantity] = useState(1);
    const amountInputRef = useRef();
    const { addItem } = useCartContext();
    
    const descreaseQuantityHandler = () => {
        setQuantity((prevState) => prevState > 1 && prevState - 1);
    };

    const increaseQuantityHandler = () => {
        setQuantity((prevState) => prevState + 1);
    };

    const addItemToCartHandler = () => {
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        addItem({ ...product, amount: enteredAmountNumber });
    };

    const getFullImagePath = (relativePath) => {
        const baseUrl = 'http://127.0.0.1:8000'; // Replace with your Django base URL
        var ImageUrl = `${baseUrl}${relativePath}`
        ImageUrl = ImageUrl.replace('/media/', '/static/')
        return ImageUrl;
      };
    
    return (
        <section className="overflow-hidden bg-white">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="top-0 z-50 overflow-hidden flex gap-5 h-full">
                            {product && product.hinh_anh1 ? (
                                <div className="flex-wrap hidden md:flex flex-col w-1/4">
                                    <a href="#" className="block border opacity-50 hover:opacity-50">
                                        <img src={getFullImagePath(product.hinh_anh1)} alt="" className="object-cover" />
                                    </a>
                                    <a href="#" className="block border hover:opacity-50">
                                        <img src={getFullImagePath(product.hinh_anh2)} alt="" className="object-cover w-full" />
                                    </a>
                                    <a href="#" className="block border hover:opacity-50">
                                        <img src={getFullImagePath(product.hinh_anh3)} alt="" className="object-cover w-full" />
                                    </a>
                                    <a href="#" className="block border hover:opacity-50">
                                        <img src={getFullImagePath(product.hinh_anh4)} alt="" className="object-cover w-full" />
                                    </a>
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}
                            <div className="relative mb-6 lg:mb-10 w-full">
                                {product && product.hinh_anh1 ? (
                                    <img src={getFullImagePath(product.hinh_anh1)} alt="" className="object-cover w-full" />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="lg:pl-10">
                            <div className="">
                                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl"> {product && product.ten_ca ? product.ten_ca : "Loading..."} </h2>
                                <p className="inline-block mb-8 text-4xl font-bold text-dark ">
                                    <span className="mr-2">
                                        {new_price}
                                        <sup>₫</sup>
                                    </span>
                                    <span className="text-base font-normal text-gray-500 line-through">
                                        {old_price}
                                        <sup>₫</sup>
                                    </span>
                                </p>
                            </div>

                            <div className="w-32 mb-8">
                                <label htmlFor="" className="w-full text-xl font-semibold text-gray-700">
                                    Quantity
                                </label>
                                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                    <button
                                        onClick={descreaseQuantityHandler}
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer  hover:text-gray-700  hover:bg-gray-400"
                                    >
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input
                                        ref={amountInputRef}
                                        type="number"
                                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black"
                                        placeholder="1"
                                        value={quantity}
                                        min={1}
                                    />
                                    <button
                                        onClick={increaseQuantityHandler}
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer  hover:text-gray-700 hover:bg-gray-400"
                                    >
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-4 ">
                                <div className="w-2/3 px-4 mb-4 lg:w-1/2 lg:mb-0">
                                    <Button
                                        onClick={addItemToCartHandler}
                                        title="Thêm vào giỏ hàng"
                                        className="bg-primary text-white rounded-md"
                                    />
                                </div>
                                <FaRegHeart className="text-4xl cursor-pointer hover:opacity-50 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDisplay;
