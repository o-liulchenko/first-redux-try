import styles from './Header.module.css';

export const Header = (props) => {
    console.log(props);
    return(
        <header className={styles.Header}>
            <button>Показати/приховати меню</button>
            <div className={styles.headerSettings}>
                <a href={`tel:${props.contacts.phone}`}>{props.contacts.phone}</a>
                <button>Українська</button>
                <button>Вийти</button>
            </div>
        </header>
    )
}