import styles from './RegisterForm.module.css';

import { useState, useRef, useContext } from "react";

import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import AuthContext from "../../contexts/AuthContext";


export default function RegisterForm() {
    
    const emailErrorMsgRef = useRef(),
    passwordErrorMsgRef = useRef(),
    confirmPasswordErrorMsgRef = useRef(),
    emailInputRef = useRef(),
    passwordInputRef = useRef(),
    [renderModal, setRenderModal] = useState(false),
    [renderBackdrop, setRenderBackdrop] = useState(false),
    [emailIsValid, setEmailIsValid] = useState(false),
    [passwordIsValid, setPasswordIsValid] = useState(false),
    [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false),
    authCtx = useContext(AuthContext);
    let modal;
    

    async function formHandler(event)
    {
        event.preventDefault();

        const inputValidators = [emailIsValid, passwordIsValid, confirmPasswordIsValid];
        if (inputValidators.every(validator => validator))
        {
            authCtx.addUser(emailInputRef.current.value, passwordInputRef.current.value);

            modal = <Modal>
                New account created!
                <span className="close" onClick={() => {
                    setRenderModal(false);
                    setRenderBackdrop(false);
                }}>&times;</span>
            </Modal>
            setRenderModal(true);
            setRenderBackdrop(true);
            event.target.reset();
        }
        else
        {
            modal = <Modal>
                    One or more of the fields is incorrectly filled.
                    <span className="close" onClick={() => {
                        setRenderModal(false);
                        setRenderBackdrop(false);
                    }}>&times;</span>
                </Modal>
            setRenderModal(true);
            setRenderBackdrop(true);
        }
    }


    return (
        <Card>
            <form className={styles.registerForm} onSubmit={formHandler}>
                <div className="inputWrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Your email" autoFocus={true}
                    ref={emailInputRef} onChange={e => {
                        if (e.target.value.length !== 0 && (
                            e.target.value.includes("@") && e.target.value.includes(".com")))
                        {
                            emailErrorMsgRef.current.style.display = "none";
                            setEmailIsValid(true);
                        }
                        else
                        {
                            emailErrorMsgRef.current.style.display = "block";
                            setEmailIsValid(false);
                        }
                    }}/>
                    <div className="form-error-msg" ref={emailErrorMsgRef}>
                        The email you entered is invalid.
                    </div>
                </div>

                <div className="inputWrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter a password"
                    ref={passwordInputRef} onChange={e => {
                        if (e.target.value.length >= 5)
                        {
                            passwordErrorMsgRef.current.style.display = "none";
                            setPasswordIsValid(true);
                        }
                        else
                        {
                            passwordErrorMsgRef.current.style.display = "block";
                            setPasswordIsValid(false);
                        }
                    }} />
                    <div className="form-error-msg" ref={passwordErrorMsgRef}>
                        The password must be at least 5 characters.
                    </div>
                </div>

                <div className="inputWrapper">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Re-enter password"
                    onChange={e => {

                        if (e.target.value === passwordInputRef.current.value)
                        {
                            confirmPasswordErrorMsgRef.current.style.display = "none";
                            setConfirmPasswordIsValid(true);
                        }
                        else
                        {
                            confirmPasswordErrorMsgRef.current.style.display = "block";
                            setConfirmPasswordIsValid(false);
                        }
                    }} />
                    <div className="form-error-msg" ref={confirmPasswordErrorMsgRef}>
                        Both passwords do not match.
                    </div>
                </div>

                <div className="contactFormActions">
                    <button>Confirm</button>
                </div>

                {renderBackdrop && <Backdrop onCancel={() => {
                    setRenderModal(false);
                    setRenderBackdrop(false);
                }} />}
                {renderModal && modal}
            </form>
        </Card>
    )
}
