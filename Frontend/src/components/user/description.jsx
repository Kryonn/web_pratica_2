import styles from './description.module.css';
import { forwardRef } from 'react';
import potionImg from '../../assets/imgs/potion.png';

const description = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={styles.main}>
            <div className={styles['title-div']}>
                <p className={styles['title']}>Descrição</p>
            </div>
            <div className={styles['description-content']}>
                <div className={styles['description-text-div']}>
                    <p className={styles['description-text']}>
                        Desde a sua fundação em 1867, a Poções e Soluções
                        estabeleceu-se como o coração da alquimia prática no
                        Beco da Última Saída, sob a liderança de Innabelle
                        Merigold. Ao longo de mais de um século de história,
                        nossa missão tem sido uma só: transformar elementos
                        raros em preparados que oferecem resultados precisos e
                        transformadores. Nossos balcões já viram passar lendas e
                        segredos, e cada fórmula presente em nosso acervo foi
                        testada e refinada pelo tempo.
                    </p>
                    <p className={styles['description-text']}>
                        Abrindo as portas de nossa tradição secular para a
                        modernidade, nosso e-commerce traz até você o mesmo
                        padrão de excelência e mistério que consagrou nossa
                        marca física. Nosso catálogo oferece uma vasta gama de
                        soluções líquidas manufaturadas com os mais altos
                        critérios de pureza: desde poções de aprimoramento
                        pessoal e elixires de inspiração artística até os mais
                        profundos caldeirões da verdade. Convidamos você a
                        desfrutar de uma experiência de compra segura, refinada
                        e envolta na sofisticação que apenas uma casa com a
                        nossa bagagem histórica pode proporcionar. Seja
                        bem-vindo ao próximo capítulo da alquimia.
                    </p>
                </div>
                <div className={styles['description-img-div']}>
                    <img className={styles.img} src={potionImg} alt="" />
                </div>
            </div>
        </div>
    );
});

export default description;
