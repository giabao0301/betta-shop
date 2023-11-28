import React from 'react';
import data_product from '../../../assets/data';
import BettaFishItem from '../../BettaFish/BettaFishItem';

const Popular = () => {
    return (
        <div className="md:p-10 p-2.5 mt-8">
            <h1 className="text-center font-bold text-4xl mb-8">BỘ SƯU TẬP MẪU CÁ BETTA ĐẸP NHẤT 2023</h1>
            <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center md:gap-y-20 gap-y-6 md:gap-x-14 gap-x-4">
                {data_product.map((item) => {
                    return (
                        <BettaFishItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
