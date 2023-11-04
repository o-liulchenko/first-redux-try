import { useNavigate } from "react-router-dom";
import { sidebarMenuItems, userInfo } from "../../staticData/sidebarMenu";
import { Sidebar } from "./Sidebar";


export const SidebarContainer = () => {

    const navigate = useNavigate();

    return(
        <Sidebar userInfo={userInfo} sidebarMenuItems={sidebarMenuItems} navigate={navigate} />
    )

}