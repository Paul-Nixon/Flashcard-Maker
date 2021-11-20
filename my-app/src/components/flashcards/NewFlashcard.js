import styles from './NewFlashcard.module.css';

import { useContext, useState } from 'react';

import AuthContext from "../../contexts/AuthContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import Card from "../ui/Card";
import useFormValidation from '../custom_hooks/useFormValidation';


export default function NewFlashcard() {
    
    const { currentUser } = useContext(AuthContext),
    categoriesCtx = useContext(CategoriesContext),
    [modalIsRendered, setModalIsRendered] = useState(false),
    [backdropIsRendered, setBackdropIsRendered] = useState(false),
    [modal, setModal] = useState(<Modal />),
    [question, setQuestion, questionIsValid] = useFormValidation(
        flashcardQuestion => flashcardQuestion.length > 0,
        ""
    ),
    [answer, setAnswer, answerIsValid] = useFormValidation(
        flashcardAnswer => flashcardAnswer.length > 0,
        ""
    ),
    [firstOption, setFirstOption, firstOptionIsValid] = useFormValidation(
        flashcardFirstOption => flashcardFirstOption.length > 0,
        ""
    ),
    [secondOption, setSecondOption, secondOptionIsValid] = useFormValidation(
        flashcardSecondOption => flashcardSecondOption.length > 0,
        ""
    ),
    [thirdOption, setThirdOption, thirdOptionIsValid] = useFormValidation(
        flashcardThirdOption => flashcardThirdOption.length > 0,
        ""
    ),


    function removeModalHandler()
    {
        setModalIsRendered(false);
        setBackdropIsRendered(false);
    }
    
    async function formHandler(event)
    {
        event.preventDefault();

        if (!validateInputs()) return;

        try
        {
            const newFlashcard = 
            {
                question,
                answer,
                options:
                    {
                        firstOption,
                        secondOption,
                        thirdOption
                    }
            };

            
        }
        catch (error)
        {

        }
    }

    function validateInputs()
    {
        if (!questionIsValid) return false;
        if (!answerIsValid) return false;
        if (!firstOptionIsValid) return false;
        if (!secondOptionIsValid) return false;
        if (!thirdOptionIsValid) return false;

        return true;
    }


    return (
        <div className={styles.flashcardFormWrapper}>
            <Card>
                <form className={styles.newFlashcardForm} onSubmit={formHandler}>
                    <div className="inputWrapper">
                        <label htmlFor="question">Question</label>
                        <input type="text" id="question" name="question" placeholder="Flashcard question"
                        onChange={e => setQuestion(e.target.value)} />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="answer">Answer</label>
                        <input type="text" id="answer" name="answer" placeholder="Flashcard answer"
                        onChange={e => setAnswer(e.target.value)} />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="firstOption">Option #1</label>
                        <input type="text" id="firstOption" name="firstOption" placeholder="First option"
                        onChange={e => setFirstOption(e.target.value)} />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="secondOption">Option #2</label>
                        <input type="text" id="secondOption" name="secondOption" placeholder="Second option"
                        onChange={e => setSecondOption(e.target.value)} />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="thirdOption">Option #3</label>
                        <input type="text" id="thirdOption" name="thirdOption" placeholder="Third option"
                        onChange={e => setThirdOption(e.target.value)} />
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
