import { useDispatch } from "react-redux";
import { contacts } from "../../staticData/sidebarMenu";
import { sidebarVisibilitySwitch } from "../../store/sidebarReducer";
import { Header } from "./Header";



export const HeaderContainer = () => {

    const dispatch = useDispatch();

    const sidebarVisibilitySwitchHandler = () => {
        let action = sidebarVisibilitySwitch();
        dispatch(action);
    }

    return(
        <Header contacts={contacts} sidebarVisibilitySwitchHandler={sidebarVisibilitySwitchHandler}/>
    )
}