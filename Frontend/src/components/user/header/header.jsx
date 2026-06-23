import styles from './header.module.css';

const header = (props) => {
    return (
        <div className={styles.main}>
            <nav className={styles['header-nav']}>
                <div className={styles['toggle-button-div']}>
                    <button
                        onClick={() => props.setAppState('admin')}
                        className={styles.button}
                        type="button"
                    >
                        Ir para página do administrador
                    </button>
                </div>
                <ul className={styles['header-ul']}>
                    <li
                        onClick={() => props.moveTo(props.descriptionRef)}
                        className={styles['header-li']}
                    >
                        Descrição
                    </li>
                    <li
                        onClick={() => props.moveTo(props.historyRef)}
                        className={styles['header-li']}
                    >
                        História
                    </li>
                    <li
                        onClick={() => props.moveTo(props.productRef)}
                        className={styles['header-li']}
                    >
                        Produtos
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default header;
