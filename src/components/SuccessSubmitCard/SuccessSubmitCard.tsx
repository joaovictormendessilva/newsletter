// CSS
import styles from './SuccessSubmitCard.module.css'

// Images
import successIcon from '../../assets/img/icon-success.svg';

// Components
import { Button } from '../Button/Button';

export function SuccessSubmitCard(){
    return(
        <div className={styles.successSubmitCard}>
            <img 
                src={successIcon} 
                alt="Ícone de sucesso" 
            />
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to <b>email@email.com</b>. Please open it and click the button inside to confirm your subscription.</p>

            <Button content='Dismiss message'/>
        </div>
    )
}