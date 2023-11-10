import { useSelector } from 'react-redux';
import style from './ApplicationPage.module.css';
import { Main } from '../../components/main/Main';
import { SidebarContainer } from '../../components/sidebar/SidebarContainer';

export const ApplicationPage = (props) => {

  const sidebarVisibility = useSelector(state => state.sidebar.sidebarVisibility);
  console.log(sidebarVisibility);

  return (
    <div className={style.ApplicationPage}>
      {
        sidebarVisibility === 'show' ? <SidebarContainer /> : <></>
      }
      <Main />
    </div>
  );
}
