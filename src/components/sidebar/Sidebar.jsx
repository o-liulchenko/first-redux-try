import style from './Sidebar.module.css';

export const Sidebar = (props) => {

    const changePositionHandler = () => {
        alert('soon...');
    }

    const sidebarMenuChangeRouteHandler = (link) => {
        props.navigate(link);
    }

    return (
        <div className={style.Sidebar} style={props.inlineStyles}>
            <div className={style.userInfo}>
                <span className={style.userPhoto}>{props.userInfo.photo}</span>
                <h1 className={style.userName}>{props.userInfo.firstName} {props.userInfo.lastName}</h1>
                <h2 className={style.userPosition}>{props.userInfo.position}</h2>
                <button className={style.userChangePositionBtn} onClick={() => { changePositionHandler() }}>Змінити посаду</button>
            </div>
            <nav>
                <ul className={style.sidebarMenu}>
                    {
                        props.sidebarMenuItems.map(item =>
                            <li key={item.id}>
                                <button className={style.sidebarMenuItem} onClick={() => { sidebarMenuChangeRouteHandler(item.link) }}>{item.icon} {item.title}</button>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}