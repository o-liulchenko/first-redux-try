import { useDispatch, useSelector } from "react-redux";
import { Inpatient } from "./Inpatient";
import { filterAction } from "../../../store/inpatientReducer";

export const InpatientContainer = () => {

    const inpatientJournal = useSelector(state => state.inpatient.inpatientJournal);
    const dispatch = useDispatch();
    
    return(
        <Inpatient inpatientJournal={inpatientJournal} dispatch={dispatch} filterActionCreator={filterAction}/>
    )
}