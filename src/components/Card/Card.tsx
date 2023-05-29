import { Illustration } from '../Illustration/Illustration';
import styles from './Card.module.css';

export function Card(){
    return(
        <div className={styles.card}>
            <div className={styles.infoAndForm}>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul className={styles.list}>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>

                <div>
                    <form action="">
                        <div className={styles.formControl}>
                            <label htmlFor="emailAddress">Email address</label>
                            <input 
                                type="email" 
                                placeholder='email@company.com'
                            />
                        </div>

                        <input type="submit" value="Subscribe to monthly newsletter"/>
                    </form>
                </div>
            </div>
            
            <Illustration />
        </div>
    )
}