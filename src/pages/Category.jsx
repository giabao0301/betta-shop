import React from 'react';
import Item from '../components/BettaFish/BettaFishItem';
import Button from '../components/UI/Button';
import { FaAngleDown } from 'react-icons/fa6';
import all_product from '../assets/all_product';

function Category(props) {
    return (
        <div className="md:p-10 p-2.5 lg:mt-[80px] mt-[64px]">
            <div className="flex mx-44 my-5 justify-between items-center">
                <p>
                    <span className="font-[600]">Showing 1-12 </span>out of 36 products
                </p>
                <div className="py-2.5 px-2 border-2 border-b-primary border-solid text-sm">
                    <select name="sort" id="" className="focus:outline-none">
                        <option>Random</option>
                        <option>Thứ tự theo mức phổ biến</option>
                        <option>Mới nhất</option>
                        <option>Thứ tự theo giá: thấp đến cao</option>
                        <option>Thứ tự theo giá: cao xuống thấp</option>
                    </select>
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
            <Button
                title="Xem thêm"
                className="flex justify-center items-center bg-[#ededed] text-light my-20 mx-auto"
            />
        </div>
    );
}

export default Category;
