import { getAuth, signOut } from 'firebase/auth';
import styles from './Header.module.css';
import { authenticationCreateAction } from '../../store/authenticationReducer';
import { useDispatch } from 'react-redux';

export const Header = (props) => {
    
    const auth = getAuth();
    const dispatch = useDispatch();

    const signOutHandler = () => {
        signOut(auth)
        .then(()=>{
            alert('Успішно вийшли з профілю');
            const action = authenticationCreateAction(null);
            dispatch(action);
        })
    }

    return(
        <header className={styles.Header}>
            <button className={styles.headerSettingsBtn} onClick={props.sidebarStyleSwitchHandler}>Показати/приховати меню</button>
            <div className={styles.headerSettings}>
                <a className={styles.headerContact} href={`tel:${props.contacts.phone}`}>{props.contacts.phone}</a>
                <button className={styles.headerSettingsBtn}>Українська</button>
                <button className={styles.headerSettingsBtn} onClick={() => {signOutHandler()}}>Вийти</button>
            </div>
        </header>
    )
}