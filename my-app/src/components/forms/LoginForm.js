import styles from './LoginForm.module.css';

import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import AuthContext from "../../contexts/AuthContext";


export default function LoginForm() {
    
    async function formHandler(event)
    {
        event.preventDefault();
    }
    
    return (
        <Card>
            <div className={styles.loginOptions}>
                <form className={styles.loginForm} onSubmit={formHandler}>
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

                <button className={styles.authProviderBtn}>Login with Google</button>
            </div>
        </Card>
    )
}
