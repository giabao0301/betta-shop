import React, { useEffect, useState } from 'react';
import fetchDataFromDjango from '../../../assets/new_collections';
import BettaFishItem from '../../BettaFish/BettaFishItem';

const NewCollections = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromDjango();
        setDataProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getFullImagePath = (relativePath) => {
    const baseUrl = 'http://192.168.68.102:8000'; // Replace with your Django base URL
    var ImageUrl = `${baseUrl}${relativePath}`
    ImageUrl = ImageUrl.replace('/media/', '/static/')
    return ImageUrl;
  };
  
  return (
    <div className="md:p-10 p-2.5 mt-8">
      <h1 className="text-center font-bold text-4xl mb-4">MẪU CÁ BETTA HOT</h1>
      <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center md:gap-y-20 gap-y-6 md:gap-x-14 gap-x-4">
        {dataProduct.map((item) => (
          <BettaFishItem
            key={item.ma_ca}
            id={item.ma_ca}
            name={item.ten_ca}
            image={getFullImagePath(item.hinh_anh1)}
            new_price={item.gia/1000}
            old_price={(item.gia/1000) + 50}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
