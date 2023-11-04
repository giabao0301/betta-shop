import React from 'react';
import styles from './Popular.module.css';
import data_product from '../assets/data';
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className={styles.popular}>
            <h1>Bộ sưu tập mẫu cá betta đẹp nhất 2023</h1>
            <div className={styles.popular__item}>
                {data_product.map((item) => {
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
                })}
            </div>
        </div>
    );
};

export default Popular;
