import styles from './user.module.css';
import Product from './product.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import History from './history.jsx';
import Description from './description.jsx';
import bannerImg from '../../assets/imgs/capa.png';
import { useRef } from 'react';

const user = (props) => {
    const descriptionRef = useRef(null);
    const historyRef = useRef(null);
    const productRef = useRef(null);

    const moveTo = (ref) => {
        console.log(ref.current);
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div className={styles.main}>
            <Header
                setAppState={props.setAppState}
                descriptionRef={descriptionRef}
                historyRef={historyRef}
                productRef={productRef}
                moveTo={moveTo}
            />
            <img className={styles['banner-img']} src={bannerImg} alt="" />
            <div className={styles.content}>
                <Description ref={descriptionRef} />
                <History ref={historyRef} />
                <Product ref={productRef} />
            </div>
            <Footer />
        </div>
    );
};
export default user;
