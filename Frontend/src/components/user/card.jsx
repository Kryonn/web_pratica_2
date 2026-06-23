import styles from './card.module.css';
import { useEffect, useState } from 'react';

const card = (props) => {
    const [buttonState, setButtonState] = useState(false);

    return (
        <div className={styles.main}>
            <div className={styles['content-div']}>
                <div className={styles['title-div']}>
                    <p className={styles.title}>{props.name}</p>
                </div>
                <div className={styles['img-div']}>
                    <img className={styles['img']} src={props.img} alt="" />
                </div>
                <div className={styles['description-div']}>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
            <div
                className={styles['buy-div']}
                onMouseEnter={() => setButtonState(true)}
                onMouseLeave={() => setButtonState(false)}
            >
                <button className={styles['buy-button']} type="button">
                    {buttonState ? 'COMPRAR' : `M₵ ${props.value},00`}
                </button>
            </div>
        </div>
    );
};
export default card;
