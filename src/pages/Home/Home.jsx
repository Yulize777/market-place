import React from 'react';
// import { Link } from 'react-router-dom';
import Card1 from './images/card1.svg'
import Card2 from './images/card2.svg'
import Card3 from './images/card3.svg'
import Card4 from './images/card4.svg'
import ServicesCard1 from './images/servicesImg1.png'
import AboutPerson from './images/aboutPerson.png'
import newsLogo from './images/newsLogo.png'
import styles from './Home.module.css'

const Home = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section__list}>
                <div className={styles.cont}>
                    <article className={styles.card_notched}>
                        <img src={Card1} alt='Наличный и безналичный расчет' />
                        <p>Наличный и безналичный расчет</p>
                    </article>
                    <article>
                        <img src={Card2} alt='Техническая помощь и консультация' />
                        <p>Техническая помощь и консультация</p>
                    </article>
                    <article>
                        <img src={Card3} alt='Только качественная и проверенная продукция' />
                        <p>Только качественная и проверенная продукция</p>
                    </article>
                    <article>
                        <img src={Card4} alt='Мы всегда на связи с 9:00 до 18:00!' />
                        <p>Мы всегда на связи с 9:00 до 18:00!</p>
                    </article>
                </div>
            </section>
            <section className={styles.section__items}>
                <div className={styles.cont}>
                    <h2>Автотовары: аксессуары, расходники и многое другое</h2>
                    <p>PROAuto - это специализированный интернет магазин востребованных товаров для автомобилей.</p>
                    <div className={styles.section__items__cards}>
                        <article className={styles.section__items__card}>
                            <div></div>
                            <h4 className={styles.section__items__h4}>АККУМУЛЯТОРЫ</h4>
                            <button>СДЕЛАТЬ ЗАКАЗ</button>
                        </article>
                        <article className={styles.section__items__card}>
                            <div></div>
                            <h4 className={styles.section__items__h4}>АВТОМАСЛА</h4>
                            <button>СДЕЛАТЬ ЗАКАЗ</button>
                        </article>
                        <article className={styles.section__items__card}>
                            <div></div>
                            <h4 className={styles.section__items__h4}>АВТОКОСМЕТИКА</h4>
                            <button>СДЕЛАТЬ ЗАКАЗ</button>
                        </article>
                        <article className={styles.section__items__card}>
                            <div></div>
                            <h4 className={styles.section__items__h4}>АВТОАКСЕССУАРЫ</h4>
                            <button>СДЕЛАТЬ ЗАКАЗ</button>
                        </article>
                        <article className={styles.section__items__card}>
                            <div></div>
                            <h4 className={styles.section__items__h4}>АВТОХИМИЯ</h4>
                            <button>СДЕЛАТЬ ЗАКАЗ</button>
                        </article>
                        <article className={styles.section__items__card}>
                            <div></div>
                            <h4 className={styles.section__items__h4}>РАСХОДНИКИ</h4>
                            <button>СДЕЛАТЬ ЗАКАЗ</button>
                        </article>
                    </div>
                </div>
            </section>
            <section className={styles.section__services}>
                <div className={styles.cont}>
                    <article className={styles.section__services__header}>
                        <h2>услуги</h2>
                        <p>Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.</p>
                    </article>
                    <div className={styles.section__services__content}>
                        <div className={styles.content__services__cards}>
                            <article>
                                <div className={`${styles.content__services__img} ${styles.content__services__img1}`}><img src={ServicesCard1} alt='ServiceImg'/></div>
                                <div className={styles.content__services__info}>
                                    <h4>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</h4>
                                    <p>Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. </p>
                                </div>
                            </article>
                            <article>
                                <div className={styles.content__services__img}><img src={ServicesCard1} alt='ServiceImg' /></div>
                                <div className={styles.content__services__info}>
                                    <h4>ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ</h4>
                                    <p>Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!</p>
                                </div>
                            </article>
                            <article>
                                <div className={styles.content__services__img}><img src={ServicesCard1} alt='ServiceImg'/></div>
                                <div className={styles.content__services__info}>
                                    <h4>БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА</h4>
                                    <p>Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!</p>
                                </div>
                            </article>
                        </div>
                        <aside></aside>
                    </div>
                    <button>ЗАДАТЬ ВОПРОС</button>
                </div>
            </section>
            <section className={styles.section__about}>
                <div className={styles.cont}>
                    <h2>о компании</h2>
                    <div className={styles.section__about__content}>
                        <img src={AboutPerson} alt='AboutSectionPerson' />
                        <article className={styles.section__about__info}>
                            <p>Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров.</p>
                            <button>УЗНАТЬ БОЛЬШЕ</button>
                        </article>
                    </div>
                </div>
            </section>
            <section className={styles.section__news}>
                <div className={styles.cont}>
                    <h2>НОВОСТИ</h2>
                    <div className={styles.section__news__cards}>
                        <article>
                            <div className={styles.section__news__bg}><img src={newsLogo} alt='Logo'/></div>
                            <p>12 февраля 2020 года</p>
                            <h4>У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!</h4>
                        </article>
                        <article>
                            <div className={styles.section__news__bg}></div>
                            <p>10 февраля 2020 года</p>
                            <h4>ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA</h4>
                        </article>
                        <article>
                            <div className={styles.section__news__bg}></div>
                            <p>5 февраля 2020 года</p>
                            <h4>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE</h4>
                        </article>
                    </div>
                    <button>ЧИТАТЬ ВСЕ НОВОСТИ</button>
                </div>
            </section>
        </main >
    );
};

export default Home;
