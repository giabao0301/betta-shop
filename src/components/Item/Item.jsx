import React from 'react';

const Item = (props) => {
    return (
        <div className="md:w-72 w-44 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img className="object-cover rounded-t-xl" src={props.image} alt="" />
            <div className="px-4 py-3">
                <p className="md:text-lg text-base font-bold text-black block capitalize">{props.name}</p>
                <div className="flex items-center">
                    <p className="md:text-lg text-base font-semibold text-black cursor-auto my-3">
                        {props.new_price}
                        <sup>₫</sup>
                    </p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                            {props.old_price}
                            <sup>₫</sup>
                        </p>
                    </del>
                </div>
            </div>
        </div>
    );
};

export default Item;
