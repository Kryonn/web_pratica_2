import styles from './product.module.css';
import Card from './card.jsx';
import { useEffect, useState, forwardRef } from 'react';

const product = forwardRef((props, ref) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3000/public/product';

        async function getRequest(url) {
            const res = await fetch(url, {
                method: 'GET',
            });

            const resjs = await res.json();

            const data = resjs.data;

            return data;
        }

        getRequest(url).then((data) => setProductList(data));
    }, []);

    return (
        <div ref={ref} className={styles.main}>
            <div className={styles['title-div']}>
                <p className={styles.title}>Produtos</p>
            </div>
            <div className={styles['grid-div']}>
                {productList?.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        img={item.img}
                        description={item.description}
                        value={item.value}
                    />
                ))}
            </div>
        </div>
    );
});
export default product;
