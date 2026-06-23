import styles from './footer.module.css';
import instagramIcon from '../../../assets/imgs/instagram-icon.png';
import facebookIcon from '../../../assets/imgs/facebook-icon.png';

const footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <nav className={styles['content-nav']}>
                    <p className={styles.title}>Contatos</p>
                    <ul className={styles['content-ul']}>
                        <li className={styles['content-li']}>
                            Telefone: 1234-1234
                        </li>
                        <li className={styles['content-li']}>
                            Celular: (99) 92345-6789
                        </li>
                        <li className={styles['content-li']}>
                            E-mail: AMerigold@pocoesesolucoes.com
                        </li>
                    </ul>
                </nav>
                <nav className={styles['content-nav']}>
                    <p className={styles.title}>Redes Sociais</p>
                    <ul className={styles['content-ul']}>
                        <li className={styles['content-li']}>
                            <img
                                className={styles['li-img']}
                                src={instagramIcon}
                                alt=""
                            />
                            <p>@pocoes_e_solucoes</p>
                        </li>
                        <li className={styles['content-li']}>
                            <img
                                className={styles['li-img']}
                                src={facebookIcon}
                                alt=""
                            />
                            <p>pocoes_e_solucoes</p>
                        </li>
                    </ul>
                </nav>
                <nav className={styles['content-nav']}>
                    <p className={styles.title}>Endereço</p>
                    <ul className={styles['content-ul']}>
                        <li className={styles['content-li']}>
                            Rua Beco da Última Saída, Bairro da magia,
                            Xique-xique - BA
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles['copyright-div']}>
                <p>© Todos os direitos reservados</p>
            </div>
        </div>
    );
};
export default footer;
