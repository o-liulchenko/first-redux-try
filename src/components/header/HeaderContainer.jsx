import { contacts } from "../../staticData/sidebarMenu"
import { Header } from "./Header"


export const HeaderContainer = () => {
    return(
        <Header contacts={contacts} />
    )
}