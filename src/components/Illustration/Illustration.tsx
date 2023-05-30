// CSS
import styles from './Illustration.module.css'

// Images
import desktopIllustration from '../../assets/img/illustration-desktop.svg'
import mobileIllustration from '../../assets/img/illustration-mobile.svg'

export function Illustration(){
    return (
        <div className={styles.illustration}>
            <img
                className={styles.desktopIllustration}
                src={desktopIllustration}
            />
            <img
                className={styles.mobileIllustration}
                src={mobileIllustration}
            />
        </div>
    )
}