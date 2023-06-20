import React from 'react';
import styles from './Header.module.css'
import logo from './images/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerCont}>
                <Link className={styles.logo} to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <Link>КОМПАНИЯ</Link>
                        <Link to='catalog'>КАТАЛОГ</Link>
                        <Link>УСЛУГИ</Link>
                        <Link>ИНФОРМАЦИЯ</Link>
                        <Link>КОНТАКТЫ</Link>
                    </ul>
                </nav>
                <button className={styles.button}>ЗАКАЗАТЬ ЗВОНОК</button>
                {/* <div className={styles.icons}></div> */}
            </div>
            <section className={styles.section__top}>
                <div className={styles.cont}>
                    <h1>НАДЕЖНЫЕ,<br />КАЧЕСТВЕННЫЕ<br />АККУМУЛЯТОРЫ</h1>
                    <Link to='catalog'>Перейти в каталог</Link>
                </div>
            </section>
        </header>
    );
};

export default Header;