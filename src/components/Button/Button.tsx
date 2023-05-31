import styles from './Button.module.css'

interface IButton {
    content: string;
    onDimissMessage?: () => void
}

export function Button({ content, onDimissMessage }:IButton){
    return <input className={styles.input} type="submit" value={content} onClick={onDimissMessage}/>
}