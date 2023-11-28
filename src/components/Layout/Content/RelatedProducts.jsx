import React from 'react';
import data_product from '../../../assets/data';
import BettaFishItem from '../../BettaFish/BettaFishItem';
const RelatedProducts = () => {
    return (
        <div className="flex flex-col items-center gap-2.5 h-[90vh]">
            <h1 className="text-5xl text-dark font-semibold">Sản phẩm tương tự</h1>
            <div className="flex gap-8 mt-12">
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

export default RelatedProducts;
