import styles from './Button.module.css'

interface IButton {
    content: string;
}

export function Button({ content }:IButton){
    return <input className={styles.input} type="submit" value={content}/>
}