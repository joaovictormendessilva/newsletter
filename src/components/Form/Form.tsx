import { ChangeEvent, FormEvent, useState } from 'react'

// CSS
import styles from './Form.module.css';

export function Form() {

    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const emailInput = document.getElementById("emailInput")

        const check = email.match(/[a-z]+@[a-z]+\.com(\.br)*/);
        if (email === "") {
            setError(true)
            emailInput?.classList.add("warningValidation")
        }
        if (check) {
            setError(false)
            emailInput?.classList.remove("warningValidation")
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

            <input type="submit" value="Subscribe to monthly newsletter"/>
        </form>
    )
}