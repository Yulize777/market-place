import React from 'react';
import styles from './catalog.module.scss'
import {IoIosArrowForward} from 'react-icons/io'
import Aside from "./components/Aside/Aside";
import Row from "./components/Row/Row";
import Data from "./components/Data/Data";
const Catalog = () => {
    return (
        <section className={styles.catalog}>
            <div className="container">
                <h2 className={styles.catalog__title}>
                    MAGNUM - каталог АКБ от 60 до 230Ah
                </h2>
                <div className={styles.catalog__column}>
                   <Aside/>
                    <div className={styles.catalog__column__contForRow}>
                       <Row/>
                      <Data/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;