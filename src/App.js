// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import style from './App.module.css';
import { Main } from './components/main/Main';
import { SidebarContainer } from './components/sidebar/SidebarContainer';

function App() {

  const sidebarVisibility = useSelector(state => state.sidebar.sidebarVisibility);
  console.log(sidebarVisibility);

  return (
    <div className={style.App}>
      {
        sidebarVisibility === 'show' ? <SidebarContainer /> : <></>
      }
      <Main />
    </div>
  );
}

export default App;
