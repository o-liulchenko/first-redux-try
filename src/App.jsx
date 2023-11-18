// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import style from './App.module.css';
import { ApplicationPageContainer } from './pages/applicationPage/ApplicationPageContainer';
import { LoginPage } from './pages/loginPage/LoginPage';

const App = (props) => {

  const user = useSelector(state => state.authentication.user);
  console.log();
  return (
    user ? <ApplicationPageContainer /> : <LoginPage />
  );
};

export default App;