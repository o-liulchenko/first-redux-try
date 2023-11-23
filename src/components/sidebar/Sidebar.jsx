import style from './Sidebar.module.css';

export const Sidebar = (props) => {

    const changePositionHandler = () => {
        alert('soon...');
    }

    const sidebarMenuChangeRouteHandler = (link) => {
        props.navigate(link);
    }

    console.log(props);

    return (
        <div className={`${style.Sidebar} ${props.sidebarVisibility ? style.sidebarVisible : style.sidebarInvisible}`}>
            <div className={style.userInfo}>
                <span className={style.userPhoto}>{props.user.email}</span>
                <h1 className={style.userName}>{props.user.displayName === null ? 'No name' : props.user.displayName}</h1>
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