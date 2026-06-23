import styles from './history.module.css';
import frontStoreImg from '../../assets/imgs/loja-frente.png';
import insideStoreImg from '../../assets/imgs/loja-dentro.png';
import { forwardRef } from 'react';

const history = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={styles.main}>
            <div className={styles['title-div']}>
                <p className={styles.title}>História</p>
            </div>
            <div className={styles['description-section']}>
                <img
                    className={styles['description-section-img']}
                    src={frontStoreImg}
                    alt=""
                />
                <div className={styles['description-section-text-div']}>
                    <p className={styles['description-section-text']}>
                        A Poções e Soluções foi fundada em 1867 com uma missão
                        simples: oferecer soluções criativas para os problemas
                        mais diversos por meio da alquimia e da magia.
                    </p>
                    <p className={styles['description-section-text']}>
                        O que começou como uma pequena loja especializada em
                        poções artesanais rapidamente se tornou um ponto de
                        referência para viajantes, aventureiros, estudiosos e
                        curiosos em busca de ajuda para desafios do cotidiano.
                        Com suas prateleiras repletas de frascos coloridos,
                        ingredientes raros e receitas cuidadosamente
                        preservadas, a loja conquistou uma reputação construída
                        sobre qualidade, criatividade e tradição.
                    </p>
                </div>
            </div>
            <div className={styles['description-section']}>
                <div className={styles['description-section-text-div']}>
                    <p className={styles['description-section-text']}>
                        Ao longo de mais de um século e meio, a Poções e
                        Soluções acompanhou as mudanças do mundo sem abandonar
                        sua essência. Novas fórmulas foram desenvolvidas,
                        técnicas foram aprimoradas e o catálogo cresceu, mas o
                        compromisso de transformar problemas em oportunidades
                        permaneceu o mesmo.
                    </p>
                    <p className={styles['description-section-text']}>
                        Hoje, a loja continua sendo um símbolo de imaginação e
                        encantamento. Cada poção produzida carrega um pouco da
                        história construída desde 1867, unindo tradição e
                        inovação para criar experiências mágicas para todas as
                        gerações.
                    </p>
                </div>
                <img
                    className={styles['description-section-img']}
                    src={insideStoreImg}
                    alt=""
                />
            </div>
        </div>
    );
});
export default history;
