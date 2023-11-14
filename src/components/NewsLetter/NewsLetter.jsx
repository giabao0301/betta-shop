import React from 'react';
import Button from '../UI/Button';

const NewsLetter = () => {
    return (
        <div className="flex flex-col items-center justify-center m-auto p-x-36 mb-36 w-3/5 h-[40vh] gap-8 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea]">
            <h1 className="text-[#454545] text-5xl font-medium">Get Exclusive Offers On Your Email</h1>
            <p className="text-[#454545] text-lg">Subscribe to our newletter and stay updated</p>
            <div className="flex items-center justify-between bg-white rounded-full w-[730px] h-[70px] border border-[#999] ">
                <input
                    className="w-[500px] h-full rounded-full ml-8 border-none outline-none text-[#616161] text-lg"
                    type="email"
                    placeholder="Enter your email"
                />
                <Button title="Đăng ký" className="mr-3" />
            </div>
        </div>
    );
};

export default NewsLetter;
