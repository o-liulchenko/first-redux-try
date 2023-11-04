import styles from './Main.module.css';
import { HeaderContainer } from "../header/HeaderContainer"

export const Main = () => {
    return(
        <main className={styles.Main}>
            <HeaderContainer />
        </main>
    )
}