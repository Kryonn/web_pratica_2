import styles from './popup.module.css';
import { useRef } from 'react';

const popup = (props) => {
    const nameRef = useRef(null);
    const imgRef = useRef(null);
    const descriptionRef = useRef(null);
    const valueRef = useRef(null);

    const url = 'http://localhost:3000/public/product';

    const updateProduct = async (oldName, newName, description, img, value) => {
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                oldName: oldName,
                newName: newName,
                description: description,
                img: img,
                value: value,
            }),
        });

        return res;
    };

    const createProduct = async (name, description, img, value) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                value: value,
                img: img,
                description: description,
            }),
        });

        return res;
    };

    return (
        <div
            className={styles.main}
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    props.setPopup('no-popup');
                }
            }}
        >
            <div className={styles.content}>
                <form className={styles.form} action="">
                    <p className={styles.title}>{props.name}</p>
                    <div className={styles['inputs-div']}>
                        <div className={styles['input-div']}>
                            <label htmlFor="">Nome</label>
                            <input
                                ref={nameRef}
                                className={styles.input}
                                type="text"
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <label htmlFor="">Preço</label>
                            <input
                                ref={valueRef}
                                className={styles.input}
                                type="text"
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <label htmlFor="">Caminho imagem</label>
                            <input
                                ref={imgRef}
                                className={styles.input}
                                type="text"
                            />
                        </div>
                        <div className={styles['input-div']}>
                            <label htmlFor="">Descrição</label>
                            <textarea
                                ref={descriptionRef}
                                className={styles['description-input']}
                                name=""
                                id=""
                            ></textarea>
                            {/* <input className={styles.input} type="text" /> */}
                        </div>
                    </div>
                    <button
                        onClick={async () => {
                            console.log('props:', props);
                            if (props.name === 'Editar') {
                                await updateProduct(
                                    props.productSelect.name,
                                    nameRef.current.value,
                                    descriptionRef.current.value,
                                    imgRef.current.value,
                                    valueRef.current.value,
                                );
                            } else {
                                await createProduct(
                                    nameRef.current.value,
                                    descriptionRef.current.value,
                                    imgRef.current.value,
                                    valueRef.current.value,
                                );
                            }
                            props.setPopup('no-popup');
                            props.setProductObserver((prev) => {
                                console.log(prev);
                                return !prev;
                            });
                        }}
                        className={styles.button}
                        type="button"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};
export default popup;
