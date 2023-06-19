import React from 'react';
import style from './register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className={style.register__wrapper}>
      <div className={style.register__container}>
        <form className={style.register__form}>
          <div className={style.register__header}>
            <h2 className={style.register__title}>Регистрация</h2>
          </div>
          <div className={style.register__info}>
            <div>
              <label htmlFor="" className={style.register__label}>
                Имя
              </label>
              <input type="text" name="" className={style.register__input} />
            </div>
            <div>
              <div>
                <label htmlFor="" className={style.register__label}>
                  Номер телефона{' '}
                </label>
                <input type="number" name="" className={style.register__input} />
              </div>
              <label htmlFor="" className={style.register__label}>
                Почта
              </label>
              <input type="email" name="" className={style.register__input} />
            </div>
            <div>
              <label htmlFor="" className={style.register__label}>
                Пароль{' '}
              </label>
              <input type="password" name="" className={style.register__input} />
            </div>
            <div>
              <label htmlFor="" className={style.register__label}>
                Подтвердить пароль{' '}
              </label>
              <input type="password" name="" className={style.register__input} />
            </div>
          </div>
          <button className={style.register__btn}>Сохранить</button>
        </form>
        <div className={style.question__container}>
          <span className={style.question}>Уже зарегистрированы?</span>
          <Link to="/auth" className={style.auth__link}>
            Авторизация
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
