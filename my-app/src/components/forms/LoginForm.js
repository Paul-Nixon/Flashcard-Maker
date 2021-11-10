import styles from './LoginForm.module.css';

import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import Card from "../ui/Card";
import AuthContext from "../../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginForm() {
    
    const emailInputRef = useRef(),
    passwordInputRef = useRef(),
    loginErrorMsgRef = useRef(),
    authCtx = useContext(AuthContext),
    history = useHistory();


    async function formHandler(event)
    {
        event.preventDefault();

        try
        {
            loginErrorMsgRef.current.style.display = "none";
            authCtx.loginUser(emailInputRef.current.value, passwordInputRef.current.value);
            history.push("/user");
        }
        catch (error)
        {
            loginErrorMsgRef.current.style.display = "block";
        }
    }
    
    function renderUserDashboard()
    {
        history.push("/user");
    }


    return (
        <Card>
            <div className={styles.loginOptions}>
                <form className={styles.loginForm} onSubmit={formHandler}>
                    <div className="formErrorMsg" ref={loginErrorMsgRef}>Invalid email or password.</div>
                    <div className="inputWrapper">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Your email" autoFocus={true}
                        ref={emailInputRef} />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter a password"
                        ref={passwordInputRef} />
                    </div>

                    <button className={styles.loginBtn}>Login</button>
                </form>

                <span className={styles.separator}>OR</span>

                <button className={styles.authProviderBtn}>
                    <FontAwesomeIcon icon={faGoogle} fixedWidth className={styles.authProviderBtnIcon} />
                    Continue with Google
                </button>

                {authCtx.currentUser && renderUserDashboard?.()}
            </div>
        </Card>
    )
}
