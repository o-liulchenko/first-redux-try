import { inpatientJournal, inpatientJournalFilter, onlyDischarged, onlyInHospital } from "../staticData/inpatientJournal"

const SHOW_ONLY_DISCHARGED = 'SHOW-ONLY-DISCHARGED';
const SHOW_ONLY_IN_HOSPITAL = 'SHOW-ONLY-IN-HOSPITAL';

const FILTER = 'FILTER';

let initialState = {};

initialState.inpatientJournal = inpatientJournal;

export const showOnlyDischargedAction = () => {
    return{
        type: SHOW_ONLY_DISCHARGED
    }
}

export const showOnlyInHospitalAction = () => {
    return{
        type: SHOW_ONLY_IN_HOSPITAL
    }
}

export const filterDischargeAction = (filterValue) => {
    return{
        type: FILTER,
        filter: {
            by: 'discharge',
            value: filterValue
        }
    }

}

export const inpatientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ONLY_DISCHARGED:
            state = {
                ...state,
                inpatientJournal: onlyDischarged()
            }
            return state;
        case SHOW_ONLY_IN_HOSPITAL:
            state = {
                ...state,
                inpatientJournal: onlyInHospital()
            }
            return state;
        case FILTER:
            state = {
                ...state,
                inpatientJournal: inpatientJournalFilter(action.filter)
            }
            return state;
        default:
            return state;
    }
}