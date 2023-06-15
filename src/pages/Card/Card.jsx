import React from 'react';
import styles from './card.module.scss'
import Aside from "../Catalog/components/Aside/Aside";
import Navigation from "./components/Navigation";
const Card = () => {
    return (
        <section className={styles.catalog}>
            <div className="container">
                <h2 className={styles.catalog__title}>
                    MAGNUM - каталог АКБ от 60 до 230Ah
                </h2>
                <div className={styles.card__row}>
                    <Aside/>
                    <div className={styles.card}>
                      <Card/>
                     <Navigation/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;