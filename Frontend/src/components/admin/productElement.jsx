import styles from './productElement.module.css';
import { useState } from 'react';

const productElement = (props) => {
    const [elementState, setElementState] = useState(true);

    const url = `http://localhost:3000/public/product/${props.name}`;

    const deleteProduct = async (url) => {
        const res = await fetch(url, {
            method: 'DELETE',
        });
    };

    return (
        <div className={styles.main}>
            <div className={styles['top-div']}>
                <div className={styles['text-div']}>
                    <p className={styles['name-text']}>{props.name}</p>
                    <p className={styles['value-text']}>M₵ {props.value}</p>
                    <p className={styles['image-text']}>{props.img}</p>
                </div>
                <div className={styles['button-div']}>
                    <button
                        onClick={() => {
                            console.log('props.name: ', props.name);
                            props.setProduct({
                                name: props.name,
                                value: props.value,
                                img: props.img,
                                description: props.description,
                            });
                            props.setPopup('edit-popup');
                        }}
                        className={styles.button}
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                        >
                            <path d="M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            deleteProduct(url);
                            props.setProductObserver((prev) => !prev);
                        }}
                        className={styles.button}
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                        >
                            <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            setElementState((prev) => !prev);
                        }}
                        className={styles.button}
                        type="button"
                    >
                        {elementState && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                            >
                                <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
                            </svg>
                        )}
                        {!elementState && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                            >
                                <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`${styles['bottom-div']} ${elementState ? styles['hidden'] : ''}`}
            >
                <p className={styles['description-text']}>
                    {props.description}
                </p>
            </div>
        </div>
    );
};
export default productElement;
