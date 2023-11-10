import styles from './Inpatient.module.css';

export const Inpatient = (props) => {

    const filterDischargeHandler = (value) => {
        const action = props.filterDischarge(value);
        props.dispatch(action);
    }

    return (
        <div className={styles.inpatientJournalContainer}>
            <div>
                <button className={styles.filterButton} onClick={() => {filterDischargeHandler(false)}}>Пацієнти в стаціонарі</button>
                <button className={styles.filterButton} onClick={() => {filterDischargeHandler(true)}}>Виписані пацієнти</button>
            </div>
            <div className={styles.inpatientJournal}>
                <div className={styles.journalRow}>
                    <b className={styles.col1}>№ історії хвороби</b>
                    <b className={styles.col2}>Дата госпіталізації</b>
                    <b>Пацієнт</b>
                    <b>Діагноз</b>
                    <b>Лікуючий лікар</b>
                </div>
                {
                    props.inpatientJournal.map(item =>
                        <div className={styles.journalRow} key={props.inpatientJournal.indexOf(item)}>
                            <span className={styles.col1}>{item.medicalData.cardNumber}</span>
                            <span className={styles.col2}>{item.medicalData.hospitalisationStartDate}</span>
                            <span>{item.patient.lastName} {item.patient.firstName} {item.patient.secondName}</span>
                            <span>{item.medicalData.diagnoses.main}</span>
                            <span>{item.medicalData.careDoctor}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )

}