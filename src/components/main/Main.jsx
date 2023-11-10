import styles from './Main.module.css';
import { HeaderContainer } from "../header/HeaderContainer"
import { Route, Routes } from 'react-router-dom';
import { InpatientContainer } from './inpatient/InpatientContainer';

export const Main = () => {
    return(
        <main className={styles.Main}>
            <HeaderContainer />
            <Routes>
                <Route path='/inpatient' element={<InpatientContainer />}/>
            </Routes>
        </main>
    )
}