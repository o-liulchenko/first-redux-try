import styles from './Header.module.css';

export const Header = (props) => {
    console.log(props);
    return(
        <header className={styles.Header}>
            <button className={styles.headerSettingsBtn} onClick={props.sidebarStyleSwitchHandler}>Показати/приховати меню</button>
            <div className={styles.headerSettings}>
                <a className={styles.headerContact} href={`tel:${props.contacts.phone}`}>{props.contacts.phone}</a>
                <button className={styles.headerSettingsBtn}>Українська</button>
                <button className={styles.headerSettingsBtn}>Вийти</button>
            </div>
        </header>
    )
}