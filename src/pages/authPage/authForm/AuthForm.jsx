import { useState } from 'react';
import styles from './AuthForm.module.css';

export const AuthForm = (props) => {

    const formSettings = props.formSettings;

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    return (
        <div className={styles.AuthForm}>
            <h1>{formSettings.title}</h1>
            <input type="email"
                placeholder='type your email here...'
                value={email}
                onInput={(e) => setEmail(e.target.value)}
            />
            <input type="password"
                placeholder='type your password here...'
                value={password}
                onInput={(e) => setPassword(e.target.value)}
            />
            <button
                className={styles.authButton}
                onClick={() => formSettings.authButtonHandler(email, password)}
            >
                {formSettings.formSubmitButtonText}
            </button>
            <div>
                <span>{formSettings.formSwitchText}</span>
                <button
                    onClick={() => formSettings.formSwitchHandler()}
                    className={styles.authButton}
                >
                    {formSettings.formSwitchButtonText}
                </button>
            </div>
        </div>
    )
}