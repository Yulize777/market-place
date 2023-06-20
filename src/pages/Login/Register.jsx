import React from 'react';
import style from './register.module.css';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";

const Register = () => {
  const {
    register,
    formState: {errors},
      handleSubmit,
      getValues
  } = useForm({mode: "onBlur"})
  const onSubmit = (data) => {

  }
  return (
    <div className={style.register__wrapper}>
      <div className={style.register__container}>
        <form className={style.register__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.register__header}>
            <h2 className={style.register__title}>Регистрация</h2>
          </div>
          <div className={style.register__info}>
            <div>
              <label style={{color: errors.name && 'red'}} htmlFor="name" className={style.register__label}>
                Имя
              </label>
              <input style={{border: errors.name && '4px solid red'}}  type="text" name="name" id={'name'} className={style.register__input} {...register('name',{
                required: {
                  value: true,
                  message: 'fill your field'
                },
                maxLength: {
                  value: 10,
                  message: 'max value is 10'
                }
              })} />
              <span className={style.register__span}>
                {errors.name && errors.name.message}
              </span>
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
              <input type="password" name="" className={style.register__input}
                     {...register('password',{
                       required: {
                         value: true,
                         message: 'fill your field'
                       },
                       maxLength: {
                         value: 10,
                         message: 'max value is 10'
                       }
                     })}
              />
            </div>
            <div>
              <label htmlFor="" className={style.register__label}>
                Подтвердить пароль{' '}
              </label>
              <input type="password" name="" className={style.register__input}
                     {...register('passwordConfirm',{
                       required: {
                         value: true,
                         message: 'repeat password'
                       },
                       validate: value => {
                         if (getValues('password') !== value){
                           return 'does not match'
                         }
                       }
                     })}
              />
              <span className={style.register__span}>
                {errors.passwordConfirm && errors.passwordConfirm.message}
              </span>
            </div>
          </div>
          <button className={style.register__btn} type={'submit'}>Сохранить</button>
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
