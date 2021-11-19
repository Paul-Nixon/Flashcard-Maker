import styles from './NewFlashcard.module.css';

import { useRef, useContext, useState } from 'react';

import AuthContext from "../../contexts/AuthContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import Card from "../ui/Card";
import useFormValidation from '../custom_hooks/useFormValidation';


export default function NewFlashcard() {
    
    const questionRef = useRef(),
    answerRef = useRef(),
    firstOptionRef = useRef(),
    secondOptionRef = useRef(),
    thirdOptionRef = useRef(),
    { currentUser } = useContext(AuthContext),
    categoriesCtx = useContext(CategoriesContext),
    [modalIsRendered, setModalIsRendered] = useState(false),
    [backdropIsRendered, setBackdropIsRendered] = useState(false),
    [modal, setModal] = useState(<Modal />);


    function removeModalHandler()
    {
        setModalIsRendered(false);
        setBackdropIsRendered(false);
    }
    
    async function formHandler(event)
    {
        event.preventDefault();


    }


    return (
        <div className={styles.flashcardFormWrapper}>
            <Card>
                <form className={styles.newFlashcardForm} onSubmit={formHandler}>
                    <div className="inputWrapper">
                        <label htmlFor="question">Question</label>
                        <input type="text" id="question" name="question" placeholder="Flashcard question"
                        ref={questionRef}  />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="answer">Answer</label>
                        <input type="text" id="answer" name="answer" placeholder="Flashcard answer" ref={answerRef}  />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="firstOption">Option #1</label>
                        <input type="text" id="firstOption" name="firstOption" placeholder="First option"
                        ref={firstOptionRef}  />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="secondOption">Option #2</label>
                        <input type="text" id="secondOption" name="secondOption" placeholder="Second option"
                        ref={secondOptionRef}  />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="thirdOption">Option #3</label>
                        <input type="text" id="thirdOption" name="thirdOption" placeholder="Third option"
                        ref={thirdOptionRef}  />
                    </div>

                    <div className="contactFormActions">
                        <button>Submit</button>
                    </div>
                </form>

                {modalIsRendered && modal}
                {backdropIsRendered && <Backdrop onCancel={removeModalHandler} />}
            </Card>
        </div>
    )
}
