import styles from './admin.module.css';
import ProductList from './productList.jsx';
import Popup from './popup.jsx';
import Label from './label.jsx';
import { useState, useEffect } from 'react';

const admin = (props) => {
    const [popupState, setPopupState] = useState('no-popup');
    const [productSelect, setProductSelect] = useState(null);
    const [productObserver, setProductObserver] = useState(true);

    useEffect(() => {
        console.log(productSelect);
    }, [productSelect]);

    return (
        <div className={styles.main}>
            <div className={styles['toggle-button-div']}>
                <button
                    onClick={() => props.setAppState('user')}
                    className={styles.button}
                    type="button"
                >
                    Ir para tela da loja
                </button>
            </div>
            <div className={styles.content}>
                {popupState === 'edit-popup' && productSelect && (
                    <Popup
                        name="Editar"
                        setPopup={setPopupState}
                        productSelect={productSelect}
                        setProductObserver={setProductObserver}
                    />
                )}
                {popupState === 'create-popup' && (
                    <Popup
                        name="Criar"
                        setPopup={setPopupState}
                        setProductObserver={setProductObserver}
                    />
                )}
                <Label setPopup={setPopupState} />
                <ProductList
                    setPopup={setPopupState}
                    setProduct={setProductSelect}
                    productObserver={productObserver}
                    setProductObserver={setProductObserver}
                />
            </div>
        </div>
    );
};
export default admin;
