import React from 'react';
const Button = (props) => {
    return (
        <button
            className={`text-base rounded-full font-bold bg-primary text-white py-3 hover:opacity-80 cursor-pointer outline-none w-36 ${props.className}`}
        >
            {props.title}
        </button>
    );
};

export default Button;
