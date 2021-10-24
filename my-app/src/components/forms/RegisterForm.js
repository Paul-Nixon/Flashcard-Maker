import styles from './RegisterForm.module.css';

import { useState, useRef } from "react";

import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import useFormValidation from '../custom_hooks/useFormValidation';


export default function RegisterForm() {
    
    const emailErrorMsgRef = useRef(),
    passwordErrorMsgRef = useRef(),
    confirmPasswordErrorMsgRef = useRef(),
    [clientEmail, setClientEmail, emailIsValid] = useFormValidation(
        enteredEmail => enteredEmail.length !== 0 && (enteredEmail.includes("@") && enteredEmail.includes(".com")),
        ""
    ),
    [clientPassword, setClientPassword, passwordIsValid] = useFormValidation(
        enteredPassword => enteredPassword.length !== 0,
        ""
    ),
    [clientConfirmPassword, setClientConfirmPassword, confirmPasswordIsValid] = useFormValidation(
        enteredConfirmPassword => enteredConfirmPassword.length !== 0,
        ""
    ),
    

    function formHandler(event)
    {
        event.preventDefault();
    }


    return (
        <Card>
            <form className={styles.registerForm} onSubmit={formHandler}>
                <div className="inputWrapper">
                    <input htmlFor="email">Email</input>
                    <input type="email" id="email" placeholder="Your email" />
                    <div className="form-error-msg" ref={emailErrorMsgRef}>
                        The email you entered is invalid.
                    </div>
                </div>

                <div className="inputWrapper">
                    <input htmlFor="password">Email</input>
                    <input type="password" id="password" placeholder="Enter a password" />
                    <div className="form-error-msg" ref={passwordErrorMsgRef}>
                        The Password field cannot be empty.
                    </div>
                </div>

                <div className="inputWrapper">
                    <input htmlFor="confirmPassword">Confirm Password</input>
                    <input type="password" id="confirmPassword" placeholder="Re-enter password" />
                    <div className="form-error-msg" ref={confirmPasswordErrorMsgRef}>
                        Passwords do not match.
                    </div>
                </div>

                <div className="contactFormActions">
                    <button>Confirm</button>
                </div>
            </form>
        </Card>
    )
}
