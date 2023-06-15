import React from 'react';
import styles from "../../catalog.module.scss";

const Row = () => {
    return (
        <div className={styles.catalog__column__row}>
            <div className={styles.catalog__column__row__card}>
                <div className={styles.catalog__column__row__card__imgCont}>
                    <img src="" alt=""/>
                </div>
                <div className={styles.catalog__column__row__card__subCont}>
                    <h3 className={styles.catalog__column__row__card__subCont__title}>АКБ MAGNUM</h3>
                    <p className={styles.catalog__column__row__card__subCont__subtitle}>Компания «Кайнар – АКБ», Казахстан</p>
                    <button className={styles.catalog__column__row__card__subCont__btn}>ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div className={styles.catalog__column__row__card}>
                <div className={styles.catalog__column__row__card__imgCont}>
                    <img src="" alt=""/>
                </div>
                <div className={styles.catalog__column__row__card__subCont}>
                    <h3 className={styles.catalog__column__row__card__subCont__title}>АКБ MAGNUM</h3>
                    <p className={styles.catalog__column__row__card__subCont__subtitle}>Компания «Кайнар – АКБ», Казахстан</p>
                    <button className={styles.catalog__column__row__card__subCont__btn}>ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div className={styles.catalog__column__row__card}>
                <div className={styles.catalog__column__row__card__imgCont}>
                    <img src="" alt=""/>
                </div>
                <div className={styles.catalog__column__row__card__subCont}>
                    <h3 className={styles.catalog__column__row__card__subCont__title}>АКБ MAGNUM</h3>
                    <p className={styles.catalog__column__row__card__subCont__subtitle}>Компания «Кайнар – АКБ», Казахстан</p>
                    <button className={styles.catalog__column__row__card__subCont__btn}>ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div className={styles.catalog__column__row__card}>
                <div className={styles.catalog__column__row__card__imgCont}>
                    <img src="" alt=""/>
                </div>
                <div className={styles.catalog__column__row__card__subCont}>
                    <h3 className={styles.catalog__column__row__card__subCont__title}>АКБ MAGNUM</h3>
                    <p className={styles.catalog__column__row__card__subCont__subtitle}>Компания «Кайнар – АКБ», Казахстан</p>
                    <button className={styles.catalog__column__row__card__subCont__btn}>ПОДРОБНЕЕ</button>
                </div>
            </div>
        </div>
    );
};

export default Row;