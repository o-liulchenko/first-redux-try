import { useNavigate } from "react-router-dom";
import { sidebarMenuItems, userInfo } from "../../staticData/sidebarMenu";
import { Sidebar } from "./Sidebar";
import { useSelector } from "react-redux";


export const SidebarContainer = () => {

    const navigate = useNavigate();
    const sidebarStyles = useSelector(state => state.sidebar.sidebarStyle.styles);
    console.log(sidebarStyles);

    return(
        <Sidebar userInfo={userInfo} sidebarMenuItems={sidebarMenuItems} navigate={navigate} inlineStyles={sidebarStyles}/>
    )

}