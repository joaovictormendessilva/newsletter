// CSS
import styles from './Illustration.module.css'

// Images
import desktopIllustration from '../../assets/img/illustration-desktop.svg'

export function Illustration(){
    return (
        <div className={styles.illustration}>
            <img
                src={desktopIllustration}
            />
        </div>
    )
}