import styles from './LoginForm.module.css';

import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import Card from "../ui/Card";
import AuthContext from "../../contexts/AuthContext";


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


    return (
        <Card>
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
        </Card>
    )
}
