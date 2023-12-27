import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/BettaFish/BettaFishItem';
import Button from '../components/UI/Button';
import { FaAngleDown } from 'react-icons/fa6';
import fetchDataFromDjango_Data_Category from '../assets/all_product';

function Category(props) {
    const [dataProduct, setDataProduct] = useState([]);
    const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromDjango_Data_Category();
        setDataProduct(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    const getFullImagePath = (relativePath) => {
        const baseUrl = 'http://127.0.0.1:8000'; // Replace with your Django base URL
        var ImageUrl = `${baseUrl}${relativePath}`
        ImageUrl = ImageUrl.replace('/media/', '/static/')
        return ImageUrl;
    };

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
                {dataProduct.map((item) => {
                    if (props.category === item.ma_loai_ca_info.ten_loai_ca.toLowerCase()) {
                        return (
                            <Item
                                key={item.ma_ca}
                                id={item.ma_ca}
                                name={item.ten_ca}
                                image={getFullImagePath(item.hinh_anh1)}
                                new_price={item.gia/1000}
                                old_price={(item.gia + 50) / 1000}
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