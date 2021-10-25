import styles from './RegisterForm.module.css';

import { useState, useRef } from "react";

import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import useFormValidation from '../custom_hooks/useFormValidation';
import { useAuth } from "../../contexts/AuthContext";


export default function RegisterForm() {
    
    const emailErrorMsgRef = useRef(),
    passwordErrorMsgRef = useRef(),
    confirmPasswordErrorMsgRef = useRef(),
    [clientEmail, setClientEmail, emailIsValid] = useFormValidation(
        email => email.length !== 0 && (email.includes("@") && email.includes(".com")),
        ""
    ),
    [clientPassword, setClientPassword, passwordIsValid] = useFormValidation(
        password => password.length >= 5,
        ""
    ),
    [clientConfirmPassword, setClientConfirmPassword, confirmPasswordIsValid] = useFormValidation(
        confirmPassword => confirmPassword === clientPassword,
        ""
    ),
    [renderModal, setRenderModal] = useState(false),
    [renderBackdrop, setRenderBackdrop] = useState(false),
    signup = useAuth();
    let modal;
    

    function formHandler(event)
    {
        event.preventDefault();

        const inputValidators = [emailIsValid, passwordIsValid, confirmPasswordIsValid];
        if (inputValidators.every(validator => validator))
        {
            signup(clientEmail, clientPassword);

            modal = <Modal>
                New account created!
                <span className="close" onClick={() => {
                    setRenderModal(false);
                    setRenderBackdrop(false);
                }}>&times;</span>
            </Modal>
            setRenderModal(true);
            setRenderBackdrop(true);
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
                    <input type="email" id="email" placeholder="Your email" autoFocus={true}
                    value={clientEmail} onChange={e => {
                        setClientEmail(e.target.value);

                        if (emailIsValid)
                        {
                            emailErrorMsgRef.current.style.display = "none";
                        }
                        else
                        {
                            emailErrorMsgRef.current.style.display = "block";
                        }
                    }}/>
                    <div className="form-error-msg" ref={emailErrorMsgRef}>
                        The email you entered is invalid.
                    </div>
                </div>

                <div className="inputWrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter a password"
                    onChange={e => {
                        setClientPassword(e.target.value);

                        if (passwordIsValid)
                        {
                            passwordErrorMsgRef.current.style.display = "none";
                        }
                        else
                        {
                            passwordErrorMsgRef.current.style.display = "block";
                        }
                    }} />
                    <div className="form-error-msg" ref={passwordErrorMsgRef}>
                        The password must be at least 5 characters.
                    </div>
                </div>

                <div className="inputWrapper">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Re-enter password"
                    value={clientConfirmPassword} onChange={e => {
                        setClientConfirmPassword(e.target.value);

                        if (confirmPasswordIsValid)
                        {
                            confirmPasswordErrorMsgRef.current.style.display = "none";
                        }
                        else
                        {
                            confirmPasswordErrorMsgRef.current.style.display = "block";
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
