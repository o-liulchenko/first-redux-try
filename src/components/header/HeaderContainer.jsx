import { useDispatch } from "react-redux";
import { contacts } from "../../staticData/sidebarMenu";
import { sidebarStyleSwitch } from "../../store/sidebarReducer";
import { Header } from "./Header";



export const HeaderContainer = () => {

    const dispatch = useDispatch();

    const sidebarStyleSwitchHandler = () => {
        let action = sidebarStyleSwitch();
        dispatch(action);
    }

    return(
        <Header contacts={contacts} sidebarStyleSwitchHandler={sidebarStyleSwitchHandler}/>
    )
}