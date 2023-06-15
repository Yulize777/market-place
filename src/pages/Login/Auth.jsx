import React from 'react';
import style from './auth.module.css';
import { Link } from 'react-router-dom';
const Auth = () => {
  return (
    <div className={style.auth__wrapper}>
      <div className={style.auth__container}>
        <form className={style.auth__form}>
          <div className={style.auth__header}>
            <h2 className={style.auth__title}>Авторизация</h2>
          </div>
          <div className={style.auth__info}>
            <div>
              <label htmlFor="" className={style.auth__label}>
                Почта
              </label>
              <input type="email" name="" className={style.auth__input} />
            </div>
            <div>
              <label htmlFor="" className={style.auth__label}>
                Пароль{' '}
              </label>
              <input type="password" name="" className={style.auth__input} />
            </div>
            <div>
              <label htmlFor="" className={style.auth__label}>
                Подтвердить пароль{' '}
              </label>
              <input type="password" name="" className={style.auth__input} />
            </div>
          </div>
          <button className={style.auth__btn}>Сохранить</button>
        </form>
        <div className={style.question__container}>
          <span className={style.question}>Не зарегистрированы?</span>
          <Link to="/register" className={style.register__link}>
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
