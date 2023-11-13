import axios from "axios";

const FILTER_ACTION = 'FILTER-ACTION';
const SHOW_ALL = 'SHOW-ALL';

let initialState = {
    inpatientJournal: await axios.get('https://my-json-server.typicode.com/o-liulchenko/first-redux-try/inpatientJournal').then(response => response.data)
};

export const showAllActionCreator = () => {
    return{
        type: SHOW_ALL
    }
}

export const filterAction = (filterBy, filterValue) => {
    return{
        type: FILTER_ACTION,
        filter: {
            by: filterBy,
            value: filterValue
        }
    }
}

const filterInpatientJournal = (state = [], filter) => {
    let result = state.filter(item => item[filter.by] === filter.value);
    return result
}

export const inpatientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALL:
            state = {
                ...state,
                inpatientJournal: initialState.inpatientJournal
            }
            return state;
        case FILTER_ACTION:
            state = {
                ...state,
                inpatientJournal: filterInpatientJournal(initialState.inpatientJournal, action.filter)
            }
            return state;
        default:
            return state;
    }
}