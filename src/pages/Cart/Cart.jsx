import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css'
import item from './images/item1Img.png'

const data = [
    {
        // img: './images/item1Img.png',
        name: "MAGNUM 60Ah",
        inStock: true,
        price: 2900,
        actualPrice: 2199,
        quantity: 1,
        id: 1
    },
    {
        // img: "./images/item1Img.png",
        name: "MAGNUM 60Ah",
        inStock: false,
        price: 2900,
        actualPrice: 2199,
        quantity: 2,
        id: 2
    }
]

export default function Cart() {
    const [dataArr, setDataArr] = useState([...data])
    const [quantity, setQuantity] = useState(dataArr.map(e => e.quantity))
    const [sumArr, setSumArr] = useState(...quantity)

    function increment(index) {
        const newQuantity = quantity.map((e, i) => {
            return i === index ? e + 1 : e
        })
        setQuantity(newQuantity)
    }

    function decrement(index) {
        const newQuantity = quantity.map((e, i) => {
            return i === index ? e - 1 : e
        })
        setQuantity(newQuantity)
    }

    function handleItemDelete(id) {
        console.log(id);
        setDataArr(dataArr.filter((e) => e.id !== id))
    }
    
    useEffect(() => {
        setSumArr(dataArr.map((e, i) => e.actualPrice * quantity[i]))
    }, [quantity, dataArr])
    return (
        <main className={styles.main}>
            <div className={styles.cont}>
                <h1>КОРЗИНА</h1>
                <section className={styles.section}>
                    {dataArr.map((e, i) => (
                        <div className={styles.item} key={e.id}>
                            <article>
                                <img src={item} alt='Item' />
                                <div className={styles.info}>
                                    <h4>{e.name}</h4>
                                    {e.inStock ?
                                        <span className={styles.inStock}>В НАЛИЧИИ</span>
                                        :
                                        <span className={styles.notInStock}>НЕ В НАЛИЧИИ</span>
                                    }
                                </div>
                            </article>
                            <div className={styles.prices}>
                                <div className={styles.actualPrice}>{e.actualPrice} руб.</div>
                                <div className={styles.price}>{e.price} руб.</div>
                            </div>
                            <div className={styles.quantityButtons}>
                                <button disabled={quantity[i] < 2} onClick={() => decrement(i)}>-</button>
                                <p>{quantity[i]}</p>
                                <button onClick={() => increment(i)}>+</button>
                            </div>
                            <div className={styles.actualPrice}>{quantity[i] * e.actualPrice} руб.</div>
                            <div onClick={() => handleItemDelete(e.id)}>X</div>
                        </div>
                    ))}
                    <div className={`${styles.item} ${styles.sumSection}`}>
                        <button onClick={() => setDataArr([])}>ОЧИСТИТЬ СПИСОК</button>
                        <aside>
                            <p>Итого {dataArr.length} товара</p>
                            <h4 styles={styles.actualPrice}>{sumArr.length > 0 && sumArr.reduce((curr, acc) => curr + acc)}</h4>
                        </aside>
                    </div>
                </section>
            </div>
        </main>
    )
}
