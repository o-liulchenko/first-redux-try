import { useDispatch, useSelector } from "react-redux";
import { Inpatient } from "./Inpatient";
import { filterDischargeAction, showOnlyDischargedAction, showOnlyInHospitalAction } from "../../../store/inpatientReducer";


export const InpatientContainer = () => {

    const inpatientJournal = useSelector(state => state.inpatient.inpatientJournal);

    const dispatch = useDispatch();

    // const filterDischarge = showOnlyDischargedAction();
    // const filterInHospital = showOnlyInHospitalAction();

    const filterDischarge = filterDischargeAction;

    return(
        <Inpatient inpatientJournal={inpatientJournal} dispatch={dispatch} filterDischarge={filterDischarge}/>
    )
}