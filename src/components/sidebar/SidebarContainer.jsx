import { useNavigate } from "react-router-dom";
import { sidebarMenuItems, userInfo } from "../../staticData/sidebarMenu";
import { Sidebar } from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { sidebarStyleSwitch } from "../../store/sidebarReducer";


export const SidebarContainer = () => {

    const navigate = useNavigate();
    const sidebarStyles = useSelector(state => state.sidebar.sidebarStyle.styles);
    const sidebarVisibility = useSelector(state => state.sidebar.sidebarStyle.state);
    const dispatch = useDispatch();

    const user = useSelector(state => state.authentication.user);

    return(
        <Sidebar userInfo={userInfo} user={user} sidebarMenuItems={sidebarMenuItems} navigate={navigate} inlineStyles={sidebarStyles} sidebarVisibility={sidebarVisibility}/>
    )

}