import styles from './LoginPage.module.css';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, applyActionCode } from "firebase/auth";
import { firebaseApp } from "../../fireBaseAuthentication";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authenticationCreateAction } from '../../store/authenticationReducer';

export const LoginPage = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [redeemCode, setRedeemCode] = useState('');

    const auth = getAuth(firebaseApp);
    const dispatch = useDispatch();

    const signUpHandler = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                sendEmailVerification(user)
                    .then(() => {
                        alert('Код надіслано');
                    })
                    .catch((error) => console.error(error));
                // const action = authenticationCreateAction(user);
                // dispatch(action);
            })
            .catch((error) => console.error(error));
    }

    const redeemCodeHandler = () => {
        applyActionCode(auth, redeemCode)
        .then((res)=> {
            console.log(res);
        })
        .catch(error => console.error(error))
    }


    return (
        <>
            <div className={styles.LoginForm}>
                <h1>Login Page</h1>
                <input type="email" placeholder="type email here..." value={email} onInput={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="type password here..." value={password} onInput={(e) => { setPassword(e.target.value) }} />
                <button className={styles.loginPageButton}>Sign In</button>
                <button className={styles.loginPageButton} onClick={() => { signUpHandler() }}>Sign Up</button>
            </div>
            <div>
                <h1>Redeem code</h1>
                <input type="text" placeholder='redeem code' value={redeemCode} onInput={(e) => { setRedeemCode(e.target.value) }} />
                <button className={styles.loginPageButton} onClick={() => {redeemCodeHandler()}}>Redeem code</button>
            </div>
        </>
    )
}