import styles from './label.module.css';
import { useEffect } from 'react';

const label = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <p className={styles['name-label']}>Nome</p>
                <p className={styles['value-label']}>Preço</p>
                <p className={styles['img-label']}>Caminho imagem</p>
                <div className={styles['button-div']}>
                    <button
                        onClick={() => props.setPopup('create-popup')}
                        className={styles.button}
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                        >
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default label;
