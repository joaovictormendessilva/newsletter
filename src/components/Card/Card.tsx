// CSS
import styles from './Card.module.css';

// Images
import successIcon from '../../assets/img/icon-success.svg'

// Components
import { Illustration } from '../Illustration/Illustration';
import { Form } from '../Form/Form';



export function Card(){
    return(
        <div className={styles.card}>
            <div className={styles.infoAndForm}>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul className={styles.list}>
                    <li>
                        <img src={successIcon} alt="ícone de sucesso" />
                        Product discovery and building what matters
                    </li>
                    <li>
                    <img src={successIcon} alt="ícone de sucesso" />
                        Measuring to ensure updates are a success
                    </li>
                    <li>
                        <img src={successIcon} alt="ícone de sucesso" />
                        And much more!
                    </li>
                </ul>

                <div>
                    <Form />
                </div>
            </div>
            
            <Illustration />
        </div>
    )
}