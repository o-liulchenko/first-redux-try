import styles from './AuthPage.module.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, applyActionCode } from "firebase/auth";
import { firebaseApp } from "../../fireBaseAuthentication";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authenticationCreateAction } from '../../store/authenticationReducer';
import { AuthForm } from './authForm/AuthForm';

export const AuthPage = () => {

    let [alreadyHaveAnAccount, setAlreadyHaveAnAccount] = useState(true);
    const auth = getAuth(firebaseApp);
    const dispatch = useDispatch();

    const authFormButtonsSettings = {
        signIn: {
            title: 'Авторизуватися',
            authButtonHandler(email, password) {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        switch (false || null) {
                            case user.emailVerified:
                                alert('Електронну пошту не підтверджено');
                                break;
                            case user.displayName:
                                alert('Не завершено реєстрацію користувача');
                                break;
                            default:
                                const action = authenticationCreateAction(user);
                                dispatch(action);
                                break;
                        }

                    })
                    .catch((error) => console.error(error));
            },
            formSubmitButtonText: 'Увійти',
            formSwitchText: 'Вперше на сайті?',
            formSwitchButtonText: 'Зареєструватися',
            formSwitchHandler() {
                setAlreadyHaveAnAccount(false);
            }
        },
        signUp: {
            title: 'Реєстрація',
            authButtonHandler(email, password) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user);
                        sendEmailVerification(user)
                            .then(() => {
                                alert('На електронну пошту надіслано листа для підтвердження реєстрації. Після підтвердження ви зможете авторизуватися');
                                setAlreadyHaveAnAccount(true);
                            })
                            .catch((error) => console.error(error));
                    })
                    .catch((error) => console.error(error));
            },
            formSubmitButtonText: 'Зареєструватися',
            formSwitchText: 'Маєте профіль?',
            formSwitchButtonText: 'Увійти',
            formSwitchHandler() {
                setAlreadyHaveAnAccount(true);
            }
        }
    }

    return (
        <div>
            {alreadyHaveAnAccount ? <AuthForm formSettings={authFormButtonsSettings.signIn} /> : <AuthForm formSettings={authFormButtonsSettings.signUp} />}
        </div>
    )
}