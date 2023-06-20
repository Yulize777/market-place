import React, {useEffect} from "react";
import styles from "../../catalog.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../../../store/thunks/catalogGetData";

const Row = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.catalogSlice)
    console.log(data)
    useEffect(() => {
        dispatch(getData())
    },[dispatch])
    return (
        <div className={styles.catalog__column__row}>
            {
                data.map(item => (
                    <div key={item.id} className={styles.catalog__column__row__card}>
                        <div className={styles.catalog__column__row__card__imgCont}>
                            <img width={'100%'} height={'100%'} src={item.url} alt=""/>
                        </div>
                        <div className={styles.catalog__column__row__card__subCont}>
                            <h3 className={styles.catalog__column__row__card__subCont__title}>АКБ MAGNUM</h3>
                            <p className={styles.catalog__column__row__card__subCont__subtitle}>{item.title}</p>
                            <button className={styles.catalog__column__row__card__subCont__btn}>ПОДРОБНЕЕ</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Row;