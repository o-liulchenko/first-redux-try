// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import style from './App.module.css';
import { ApplicationPageContainer } from './pages/applicationPage/ApplicationPageContainer';
import { AuthPage } from './pages/authPage/AuthPage';

const App = (props) => {

  const user = useSelector(state => state.authentication.user);
  return (
    user ? <ApplicationPageContainer /> : <AuthPage />
  );
};

export default App;