import React from 'react';
import styles from './Header.module.css'
import logo from './images/logo.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerCont}>
                <div className={styles.logo}>
                    <img src={logo} alt='logo' />
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>КОМПАНИЯ</li>
                        <li>КАТАЛОГ</li>
                        <li>УСЛУГИ</li>
                        <li>ИНФОРМАЦИЯ</li>
                        <li>КОНТАКТЫ</li>
                    </ul>
                </nav>
                <button className={styles.button}>ЗАКАЗАТЬ ЗВОНОК</button>
                {/* <div className={styles.icons}></div> */}
            </div>
        </header>
    );
};

export default Header;