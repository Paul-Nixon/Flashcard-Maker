import styles from './ContactForm.module.css';

import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import useFormValidation from '../custom_hooks/useFormValidation';


export default function ContactForm() {
    
    const [clientName, setClientName, nameIsValid] = useFormValidation(
        enteredName => enteredName.length !== 0,
        ""
        ),
    [clientEmail, setClientEmail, emailIsValid] = useFormValidation(
        enteredEmail => enteredEmail.length !== 0 && (enteredEmail.includes("@") && enteredEmail.includes(".com")),
        ""
    ),
    [clientComments, setClientComments, commentsAreValid] = useFormValidation(
        enteredComments => enteredComments.length !== 0,
        ""
        ),
    formRef = useRef(),
    nameErrorMsgRef = useRef(),
    emailErrorMsgRef = useRef(),
    commentsErrorMsgRef = useRef(),
    [renderModal, setRenderModal] = useState(false),
    [renderBackdrop, setRenderBackdrop] = useState(false);
    let modal;


    function formHandler(event)
    {
        event.preventDefault();

        const inputValidators = [nameIsValid, emailIsValid, commentsAreValid];
        if (inputValidators.every(validator => validator == true))
        {
            emailjs.sendForm("service_ofxjqws", "template_o5e62j9", formRef.current, "user_7qgQo5htj3QezqP0Ywlm8")
            .then((result) => {
                console.log(result.text);
            }).catch(error => console.log(error));
            modal = <Modal>
                    Your message was successfully sent!
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
        }
    }
 

    return (
        <Card>
            <form className={styles.contactForm} onSubmit={formHandler} ref={formRef}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" value={clientName} autoFocus="true"
                    onChange={e => {
                        setClientName(e.target.value);
                        if (nameIsValid)
                        {
                            nameErrorMsgRef.current.style.display = "none";
                        }
                        else
                        {
                            nameErrorMsgRef.current.style.display = "block";
                        }
                    }} />
                    <div className="form-error-msg" ref={nameErrorMsgRef}>
                        The Name text field cannot be empty.
                    </div>
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" value={clientEmail}
                    onChange={e => {
                        setClientEmail(e.target.value);
                        if (emailIsValid)
                        {
                            emailErrorMsgRef.current.style.display = "none";
                        }
                        else
                        {
                            emailErrorMsgRef.current.style.display = "block";
                        }
                    }} />
                    <div className="form-error-msg" ref={emailErrorMsgRef}>This email is invalid.</div>
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="comments">Comments</label>
                    <textarea rows="5" id="comments" name="message" value={clientComments}
                    placeholder="Enter your comments here..." onChange={e => {
                        setClientComments(e.target.value);
                        if (commentsAreValid)
                        {
                            commentsErrorMsgRef.current.style.display = "none";
                        }
                        else
                        {
                            commentsErrorMsgRef.current.style.display = "block";
                        }
                    }}></textarea>
                    <div className="form-error-msg" ref={commentsErrorMsgRef}>
                        The textarea cannot be empty.
                    </div>
                </div>

                <div className={styles.contactFormActions}>
                    <button>Submit</button>
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
