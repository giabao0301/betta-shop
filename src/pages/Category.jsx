import React from 'react';
import useShopContext from '../context/shop-context';
import { FaAngleDown } from 'react-icons/fa6';
import Item from '../components/Item/Item';

function Category(props) {
    const { all_product } = useShopContext();
    return (
        <div className="md:p-10 p-2.5 lg:mt-[80px] mt-[64px]">
            <div className="flex mx-44 my-0 justify-between items-center">
                <p>
                    <span className="font-[600]">Showing 1-12</span>out of 36 products
                </p>
                <div className="flex items-center py-2.5 px-5 rounded-full border border-[#888] border-solid">
                    Sort by
                    <FaAngleDown />
                </div>
            </div>
            <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center md:gap-y-20 gap-y-6 md:gap-x-14 gap-x-4">
                {all_product.map((item) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    } else {
                        return;
                    }
                })}
            </div>
            <div className="flex justify-center items-center my-36 mx-auto w-[233px] h-16 rounded-full bg-[#ededed] text-[#787878] text-lg font-medium">
                Xem thêm
            </div>
        </div>
    );
}

export default Category;
