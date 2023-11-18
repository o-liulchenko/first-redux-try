import styles from './Inpatient.module.css';

export const JournalList = (props) => {
    return (
        <>
            {
                props.journalItems.map(item =>
                    <div className={styles.journalRow} key={props.inpatientJournal.indexOf(item)}>
                        <span>{item.historyNumber}</span>
                        <span>{item.startDate}</span>
                        <span>{item.patient.name}</span>
                        <span>{item.diagnose}</span>
                        <span>{item.careEmployee.name}</span>
                        <span>{item.departament}</span>
                        {
                            item.discharged ? <span className={styles.discharged}>Виписаний</span> : <span className={styles.notDischarged}>У відділенні</span>
                        }
                    </div>)
            }
        </>
    )
}