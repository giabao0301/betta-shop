import React from 'react';
import { Link } from 'react-router-dom';

const BettaFishItem = (props) => {
    const new_price = `${props.new_price},000`;
    const old_price = `${props.old_price},000`;
    return (
        <Link to={`/product/${props.id}`}>
            <div className="md:w-72 w-44 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
                <img className="object-cover rounded-t-xl" src={props.image} alt="" />
                <div className="px-4 py-3">
                    <p className="md:text-lg text-base font-bold text-black block capitalize">{props.name}</p>
                    <div className="flex items-center">
                        <p className="md:text-lg text-base font-semibold text-black cursor-auto my-3">
                            {new_price}
                            <sup>₫</sup>
                        </p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">
                                {old_price}
                                <sup>₫</sup>
                            </p>
                        </del>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BettaFishItem;
