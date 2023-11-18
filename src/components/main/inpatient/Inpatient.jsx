import styles from './Inpatient.module.css';
import { JournalList } from './JournalList';

export const Inpatient = (props) => {

    const filterHandler = (filterBy, filterValue) => {
        const action = props.filterActionCreator(filterBy, filterValue);
        props.dispatch(action);
    }
    const showAllHandler = () => {
        const action = props.showAllAction();
        props.dispatch(action);
    }

    return (
        <div className={styles.inpatientJournalContainer}>
            <div>
                <button className={styles.filterButton} onClick={() => { showAllHandler() }}>Всі пацієнти</button>
                <button className={styles.filterButton} onClick={() => { filterHandler('discharged', false) }}>Пацієнти в стаціонарі</button>
                <button className={styles.filterButton} onClick={() => { filterHandler('discharged', true) }}>Виписані пацієнти</button>
            </div>
            <div className={styles.inpatientJournal}>
                <div className={styles.journalRow}>
                    <b className={styles.col1}>№ історії хвороби</b>
                    <b className={styles.col2}>Дата госпіталізації</b>
                    <b>Пацієнт</b>
                    <b>Діагноз</b>
                    <b>Лікуючий лікар</b>
                    <b>Відділення</b>
                    <b>Статус</b>
                </div>
                <JournalList journalItems={props.inpatientJournal} /> 
            </div>
        </div>
    )

}