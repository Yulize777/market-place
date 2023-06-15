import React from 'react';
import styles from './card.module.scss'
import Aside from "../Catalog/components/Aside/Aside";
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

                        <div className={styles.card__navigation}>
                            <div className={styles.card__navigation__contForArrows}>
                                <div className={styles.card__navigation__contForArrows__arrowLeft}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <rect x="2" y="2" width="36" height="36" stroke="#C53720" stroke-width="4"/>
                                            <path d="M24.6155 9.23077L15.3848 20L24.6155 30.7692" stroke="#C53720" stroke-width="4"/>
                                        </g>
                                    </svg>

                                </div>
                                <div className={styles.card__navigation__contForArrows__arrowRight}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="-2" y="2" width="36" height="36" transform="matrix(-1 0 0 1 36 0)" stroke="#C53720" stroke-width="4"/>
                                        <path d="M15.3845 9.23077L24.6152 20L15.3845 30.7692" stroke="#C53720" stroke-width="4"/>
                                    </svg>

                                </div>
                            </div>
                            <div className={styles.card__navigation__contForCart}>
                                <div className={styles.card__navigation__contForCart__contForQuantity}>
                                    <div className={styles.card__navigation__contForCart__contForQuantity__smallCube}>-</div>
                                    <div className={styles.card__navigation__contForCart__contForQuantity__bigCube}>01</div>
                                    <div className={styles.card__navigation__contForCart__contForQuantity__smallCube}>+</div>
                                </div>
                                <div className={styles.card__navigation__contForCart__contForSending}>
                                    <div className={styles.card__navigation__contForCart__contForSending__text}>В КОРЗИНУ</div>
                                    <div className={styles.card__navigation__contForCart__contForSending__icon}>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 1L17.1035 11H4" stroke="#C53720" stroke-width="2"/>
                                            <path d="M5 0L5 11.6667" stroke="#C53720" stroke-width="2"/>
                                            <path d="M5 1L0 1" stroke="#C53720" stroke-width="2"/>
                                            <circle cx="14.4002" cy="16.8" r="2.2" stroke="#C53720" stroke-width="2"/>
                                            <circle cx="7.2" cy="16.8" r="2.2" stroke="#C53720" stroke-width="2"/>
                                            <path d="M9 3L15 3" stroke="#C53720" stroke-width="2"/>
                                            <path d="M12 6V-1.78814e-07" stroke="#C53720" stroke-width="2"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;