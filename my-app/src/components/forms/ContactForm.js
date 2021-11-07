import styles from './ContactForm.module.css';

import { useState, useRef } from "react";

import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";


export default function ContactForm() {
    
    const formRef = useRef(),
    nameErrorMsgRef = useRef(),
    emailErrorMsgRef = useRef(),
    commentsErrorMsgRef = useRef(),
    [renderModal, setRenderModal] = useState(false),
    [renderBackdrop, setRenderBackdrop] = useState(false),
    [nameIsValid, setNameIsValid] = useState(false),
    [emailIsValid, setEmailIsValid] = useState(false),
    [commentsAreValid, setCommentsAreValid] = useState(false);
    let modal;


    function formHandler(event)
    {
        event.preventDefault();

        const inputValidators = [nameIsValid, emailIsValid, commentsAreValid];
        if (inputValidators.every(validator => validator))
        {
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
            setRenderModal(true);
            setRenderBackdrop(true);
        }
    }
 

    return (
        <Card>
            <form className={styles.contactForm} onSubmit={formHandler} ref={formRef}>
                <div className="inputWrapper">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" autoFocus="true"
                    onChange={e => {                       
                        if (e.target.value.length !== 0)
                        {
                            nameErrorMsgRef.current.style.display = "none";
                            setNameIsValid(true);
                        }
                        else
                        {
                            nameErrorMsgRef.current.style.display = "block";
                            setNameIsValid(false);
                        }
                    }} />
                    <div className="form-error-msg" ref={nameErrorMsgRef}>
                        The Name text field cannot be empty.
                    </div>
                </div>

                <div className="inputWrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email"
                    onChange={e => {
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
                    }} />
                    <div className="form-error-msg" ref={emailErrorMsgRef}>This email is invalid.</div>
                </div>

                <div className="inputWrapper">
                    <label htmlFor="comments">Comments</label>
                    <textarea rows="5" id="comments" name="message" placeholder="Enter your comments here..."
                    onChange={e => {
                        if (e.target.value.length !== 0)
                        {
                            commentsErrorMsgRef.current.style.display = "none";
                            setCommentsAreValid(true);
                        }
                        else
                        {
                            commentsErrorMsgRef.current.style.display = "block";
                            setCommentsAreValid(false);
                        }
                    }}></textarea>
                    <div className="form-error-msg" ref={commentsErrorMsgRef}>
                        The textarea cannot be empty.
                    </div>
                </div>

                <div className="contactFormActions">
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
