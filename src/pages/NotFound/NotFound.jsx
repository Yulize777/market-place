import React from 'react';
import style from './notFound.module.css';
import { Link } from 'react-router-dom';
import not from '../../assets/images/404.png';
const NotFound = () => {
  return (
    <div className={style.notFound__wrapper}>
      <div className={style.notFound__desc}>
        <img src={not} alt="404 error" className={style.notFound__img} />
        <p className={style.notFound__title}>Страница не найдена</p>

        <p className={style.notFound__description}>
          Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес.
        </p>
        <Link to="/" className={style.notFound__link}>
          Перейти на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
