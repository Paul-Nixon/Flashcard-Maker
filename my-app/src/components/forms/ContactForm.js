import styles from './ContactForm.module.css';

import { useRef } from "react";

import Card from "../ui/Card";

export default function ContactForm() {
    
    const nameRef = useRef(),
    emailRef = useRef(),
    textareaRef = useRef();

    function formHandler(event)
    {
        event.preventDefault();
    }
    
    return (
        <Card>
            <form className={styles.contactForm} onSubmit={formHandler}>
                <div className={styles.inputWrapper}>
                    <label>Name</label>
                    <input type="text" placeholder="Your name" autoFocus="true" ref={nameRef} />
                </div>

                <div className={styles.inputWrapper}>
                    <label>Email</label>
                    <input type="email" placeholder="Your email" ref={emailRef} />
                </div>

                <div className={styles.inputWrapper}>
                    <label>Comments</label>
                    <textarea rows="5" placeholder="Enter your comments here..." ref={textareaRef}></textarea>
                </div>

                <div className={styles.contactFormActions}>
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    )
}
