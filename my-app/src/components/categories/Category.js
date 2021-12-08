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
                <button className={styles.categoryOptionBtn} onClick={() => {
                    if (categoriesCtx.fetchFlashcards(id).length >= 10) renderAssessmentPage("quiz");

                    setModal(<Modal>
                        <span class="close" onClick={removeModalHandler}>&times;</span>
                        This category doesn't have at least 10 flashcards.
                    </Modal>);
                    setModalIsRendered(true);
                    setBackdropIsRendered(true);
                }}>Take Quiz</button>
                <button className={styles.categoryOptionBtn} onClick={() => {
                    renderFlashcardsPage(id);
                }}>Take Test</button>
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
