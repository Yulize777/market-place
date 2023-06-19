import React from 'react';
import styles from "../../catalog.module.scss";
import {IoIosArrowForward} from "react-icons/io";

const Aside = () => {
    return (
        <aside className={styles.catalog__column__aside}>

            <ul className={styles.catalog__column__aside__list}>
                <li className={styles.catalog__column__aside__list__line}>
                    АККУМУЛЯТОРЫ
                    <IoIosArrowForward/>
                </li>
            </ul>

            <ul className={styles.catalog__column__aside__list}>
                <li className={styles.catalog__column__aside__list__line}>
                    ПОДБОР ПАРАМЕТРОВ
                    <IoIosArrowForward/>
                </li>
            </ul>

        </aside>
    );
};

export default Aside;