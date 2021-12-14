import styles from './Category.module.css';

import { useState, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CategoriesContext from "../../contexts/CategoriesContext";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";


export default function Category({ name, renderNewFlashcardPage, renderFlashcardsPage, renderAssessmentPage, id }) {
    
    const categoriesCtx = useContext(CategoriesContext),
    [modal, setModal] = useState(<Modal />),
    [modalIsRendered, setModalIsRendered] = useState(false),
    [backdropIsRendered, setBackdropIsRendered] = useState(false);

   
    function removeModalHandler()
    {
        setModalIsRendered(false);
        setBackdropIsRendered(false);
    }

    async function removeCategoryHandler()
    {
        categoriesCtx.removeCategory(id);
        removeModalHandler();
    }

    async function renderQuizInfo()
    {
        setModal(<Modal>
            <div className="modal--flex">
                You will be taking a quiz with 10 random questions taken from
                this category.
                <div className="modal--btn--wrapper">
                    <button className="modal--btn modal--btn--primary"
                    onClick={removeModalHandler}>cancel</button>
                    <button className="modal--btn modal--btn--alt"
                    onClick={() => renderAssessmentPage("quiz", id)}>start</button>
                </div>
            </div>
        </Modal>)
        setModalIsRendered(true);
        setBackdropIsRendered(true);
    }

    async function renderTestInfo()
    {
        setModal(<Modal>
            <div className="modal--flex">
                You will be taking a test consisting of all of this category's
                questions.
                <div className="modal--btn--wrapper">
                    <button className="modal--btn modal--btn--primary"
                    onClick={removeModalHandler}>cancel</button>
                    <button className="modal--btn modal--btn--alt"
                    onClick={() => renderAssessmentPage("test", id)}>start</button>
                </div>
            </div>
        </Modal>)
        setModalIsRendered(true);
        setBackdropIsRendered(true);
    }



    return (
        <li className={styles.category}>
            <h2 className={styles.categoryTitle}>{name}</h2>

            <div className={styles.categoryOptions}>
                <button className={styles.categoryOptionBtn} onClick={() => {
                    renderNewFlashcardPage(id)
                }}>Add New Flashcard</button>
                <button className={styles.categoryOptionBtn} onClick={() => {
                    renderFlashcardsPage(id);
                }}>View Flashcards</button>
                <button className={styles.categoryOptionBtn} onClick={renderQuizInfo}>Take Quiz</button>
                <button className={styles.categoryOptionBtn} onClick={renderTestInfo}>Take Test</button>
                <FontAwesomeIcon icon={faTrash} className={styles.categoryTrashBtn} onClick={() => {
                    setModal(<Modal>
                        <div className="modal--flex">
                            Are you sure?
                            <div className="modal--btn--wrapper">
                                <button className="modal--btn modal--btn--primary"
                                onClick={removeModalHandler}>cancel</button>
                                <button className="modal--btn modal--btn--alt"
                                onClick={removeCategoryHandler}>delete</button>
                            </div>
                        </div>
                    </Modal>);
                    setModalIsRendered(true);
                    setBackdropIsRendered(true);
                }} />
            </div>

            {modalIsRendered && modal}
            {backdropIsRendered && <Backdrop onCancel={removeModalHandler} />}
        </li>
    )
}
