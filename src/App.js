// import logo from './logo.svg';
import style from './App.module.css';
import { Main } from './components/main/Main';
import { SidebarContainer } from './components/sidebar/SidebarContainer';

function App() {
  return (
    <div className={style.App}>
      <SidebarContainer />
      <Main />
    </div>
  );
}

export default App;
