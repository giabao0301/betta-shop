import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../assets/images/hero-image.png';

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles['hero--left']}>
                <h1 className="text-8xl">GIANT BETTA</h1>
                <p>Màu đẹp nét căng - Form chuẩn</p>
                <p>Đường nét sắc sảo số 1 để làm giống</p>
                <a className={styles['hero__btn']}>MUA NGAY</a>
            </div>
            <div className={styles['hero--right']}>
                <img src={heroImage} alt="" />
            </div>
        </div>
    );
}

export default Hero;
