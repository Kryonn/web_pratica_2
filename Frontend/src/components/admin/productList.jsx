import styles from './productList.module.css';
import ProductElement from './productElement.jsx';
import { useState, useEffect } from 'react';

const productList = (props) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3000/public/product';

        async function getProduct(url) {
            const res = await fetch(url, {
                method: 'GET',
            });

            const resjs = await res.json();

            const data = resjs.data;

            return data;
        }

        getProduct(url).then((data) => setProductList(data));
    }, [props.productObserver]);

    return (
        <div className={styles.main}>
            <nav className={styles['product-nav']}>
                <ul className={styles['product-ul']}>
                    {productList &&
                        productList.map((item, index) => (
                            <ProductElement
                                key={index}
                                name={item.name}
                                img={item.img}
                                description={item.description}
                                value={item.value}
                                setProduct={props.setProduct}
                                setProductObserver={props.setProductObserver}
                                setPopup={props.setPopup}
                            />
                        ))}
                </ul>
            </nav>
        </div>
    );
};
export default productList;
