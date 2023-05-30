import { ChangeEvent, FormEvent, useState, useContext } from 'react'

// CSS
import styles from './Form.module.css';
import { FormContext } from '../../App';
import { Button } from '../Button/Button';

// Context API

export function Form() {

    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const setSuccessSubmit = useContext(FormContext)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const emailInput = document.getElementById("emailInput")

        const check = email.match(/[a-z]+@[a-z]+\.com(\.br)*/);
        if (email === "") {
            setError(true)
            emailInput?.classList.add("warningValidation")
        }
        else if (check) {
            setError(false)
            emailInput?.classList.remove("warningValidation")
            setSuccessSubmit?.(true)
        }
        else{
            setError(true)
            emailInput?.classList.add("warningValidation")
        }
        
    }

    

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formControl}>
                <div className={styles.formLabels}>
                    <label htmlFor="emailAddress">Email address</label>
                    {error ? <label className={styles.warningLabel} htmlFor="emailAddress">Valid email required</label> : ""}
                </div>
                <input 
                    id='emailInput'
                    className=''
                    type="text" 
                    placeholder='email@company.com'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            </div>
            
            <Button content="Subscribe to monthly newsletter"/>
            {/* <input type="submit" value="Subscribe to monthly newsletter"/> */}
        </form>
    )
}