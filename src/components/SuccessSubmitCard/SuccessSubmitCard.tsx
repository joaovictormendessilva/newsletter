// CSS
import styles from './SuccessSubmitCard.module.css'

// Images
import successIcon from '../../assets/img/icon-success.svg';

// Components
import { Button } from '../Button/Button';

// Context API
import { useContext } from 'react';
import { FormContext } from '../../App';

export function SuccessSubmitCard(){

    const formContext = useContext(FormContext)
    if (!formContext) return null;
    const { email, setSuccessSubmit, setEmail } = formContext
    
    const dimissMessage = () => {
        setSuccessSubmit((prev) => {
            return prev = !prev
        })

        setEmail("");

        console.log("Entrou")
    }

    return(
        <div className={styles.successSubmitCard}>
            <img 
                src={successIcon} 
                alt="Ícone de sucesso" 
            />
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>

            <Button content='Dismiss message' onDimissMessage={dimissMessage}/>
        </div>
    )
}