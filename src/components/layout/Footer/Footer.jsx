import React from 'react';
import styles from './Footer.module.css'
import logo from './images/logo.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.cont}>
                <div className={`${styles.logo} ${styles.row}`}>
                    <img src={logo} />
                    <p>© 2019 PRO Auto.<br/>Все права защищены.</p>
                </div>
                <div className={styles.row}>
                    <h3 className={styles.titleLi}>КОМПАНИЯ</h3>
                    <ul className={styles.row}>
                        <li className={styles.liItem}>О КОМПАНИИ</li>
                        <li className={styles.liItem}>ЛИЦЕНЗИИ</li>
                        <li className={styles.liItem}>ПАРТНЕРЫ</li>
                        <li className={styles.liItem}>ОТЗЫВЫ КЛИЕНТОВ</li>
                        <li className={styles.liItem}>РЕКВИЗИТЫ</li>
                        <li className={styles.liItem}>ВАКАНСИИ</li>
                    </ul>
                </div>
                <div className={styles.row}>
                    <h3 className={styles.titleLi}>КАТАЛОГ</h3>
                    <ul className={styles.row}>
                        <li className={styles.liItem}>АККУМУЛЯТОРЫ</li>
                        <li className={styles.liItem}>АВТОМАСЛА</li>
                        <li className={styles.liItem}>АКСЕССУАРЫ</li>
                        <li className={styles.liItem}>АВТОХИМИЯ</li>
                    </ul>
                </div>
                <div className={styles.row}>
                    <h3 className={styles.titleLi}>УСЛУГИ</h3>
                    <ul className={styles.row}>
                        <li className={styles.liItem}>ДИАГНОСТИКА АККУМУЛЯТОРА</li>
                        <li className={styles.liItem}>ПРИЕМ АККУМУЛЯТОРОВ</li>
                    </ul>
                </div>
                <div className={styles.row}>
                    <h3 className={styles.titleLi}>ИНФОРМАЦИЯ</h3>
                    <ul className={styles.row}>
                        <li className={styles.liItem}>НОВОСТИ</li>
                        <li className={styles.liItem}>F.A.Q.</li>
                    </ul>
                </div>
                <div className={styles.row}>
                    <a className={styles.links} href='tel:+7(342)279-36-13'>+7 (342) 279-36-13</a>
                    <a className={styles.links} href='mailto:proauto59@yandex.ru'>proauto59@yandex.ru</a>
                    <button className={styles.button}>ЗАКАЗАТЬ ЗВОНОК</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;