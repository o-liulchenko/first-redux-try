import style from './ApplicationPage.module.css';
import { Main } from '../../components/main/Main';
import { SidebarContainer } from '../../components/sidebar/SidebarContainer';

export const ApplicationPage = (props) => {
  return (
    <div className={style.ApplicationPage}>
      <SidebarContainer />
      <Main />
    </div>
  );
}
