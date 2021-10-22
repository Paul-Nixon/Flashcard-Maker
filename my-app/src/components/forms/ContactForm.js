import styles from './ContactForm.module.css';

import { useRef } from "react";

import Card from "../ui/Card";
import useFormValidation from '../custom_hooks/useFormValidation';


export default function ContactForm() {
    
    const [testName, nameIsValid] = useFormValidation(enteredName => enteredName.length > 0),
    [testEmail, emailIsValid] = useFormValidation(
        enteredEmail => enteredEmail.length > 0 && (enteredEmail.includes("@") && enteredEmail.includes(".com"))
    ),
    [testComments, commentsAreValid] = useFormValidation(enteredComments => enteredComments.length > 0),
    nameErrorMsgRef = useRef(),
    emailErrorMsgRef = useRef(),
    commentsErrorMsgRef = useRef();


    function formHandler(event)
    {
        event.preventDefault();

        const inputValidators = [nameIsValid, emailIsValid, commentsAreValid];
        if (inputValidators.every(true))
        {
            
        }
        else
        {
            // 
        }
    }
    

    return (
        <Card>
            <form className={styles.contactForm} onSubmit={formHandler}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" autoFocus="true" onChange={e => {
                        testName(e.target.value);
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
                    <input type="email" id="email" placeholder="Your email" onChange={e => {
                        testEmail(e.target.value);
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
                    <textarea rows="5" id="comments" placeholder="Enter your comments here..." onChange={e => {
                        testComments(e.target.value);
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
            </form>
        </Card>
    )
}
