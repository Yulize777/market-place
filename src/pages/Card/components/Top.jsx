import React from 'react';
import styles from "../card.module.scss";
const Top = () => {
    return (
        <div className={styles.card__top}>

            <div className={styles.card__left}>
                <img  width={'100%'} height={'100%'} src="" alt=""/>
            </div>

            <div className={styles.card__right}>
                <h3 className={styles.card__right__availability}>В НАЛИЧИИ</h3>
                <ul className={styles.card__right__list}>
                    <li className={styles.card__right__list__line}>
                        Емкость, Ач:
                        <span className={styles.card__right__list__span}> 60</span>
                    </li>
                    <li className={styles.card__right__list__line}>
                        Емкость, Ач:
                        <span className={styles.card__right__list__span}> 60</span>
                    </li>
                    <li className={styles.card__right__list__line}>
                        Емкость, Ач:
                        <span className={styles.card__right__list__span}> 60</span>
                    </li>
                    <li className={styles.card__right__list__line}>
                        Емкость, Ач:
                        <span className={styles.card__right__list__span}> 60</span>
                    </li>
                    <li className={styles.card__right__list__line}>
                        Емкость, Ач:
                        <span className={styles.card__right__list__span}> 60</span>
                    </li>
                </ul>
                <div className={styles.card__right__contForPrice}>
                    <p className={styles.card__right__contForPrice__price}>2199 руб.</p>
                    <p className={styles.card__right__contForPrice__sale}>2900 руб.</p>
                    <p className={styles.card__right__contForPrice__desc}>Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>
                </div>
            </div>
        </div>
    );
};

export default Top;