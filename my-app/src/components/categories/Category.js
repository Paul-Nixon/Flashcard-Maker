import styles from './Category.module.css';

import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AuthContext from "../../contexts/AuthContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";


export default function Category({ name, renderNewFlashcardPage, renderFlashcardsPage }) {
    
    const { currentUser } = useContext(AuthContext),
    categoriesCtx = useContext(CategoriesContext);
    
    return (
        <li className={styles.category}>
            <h2 className={styles.categoryTitle}>{name}</h2>

            <div className={styles.categoryOptions}>
                <button className={styles.categoryOptionBtn} onClick={() => {
                    renderNewFlashcardPage(name)
                }}>Add New Flashcard</button>
                <button className={styles.categoryOptionBtn} onClick={renderFlashcardsPage}>View Flashcards</button>
                <FontAwesomeIcon icon={faTrash} className={styles.categoryTrashBtn} />
            </div>
        </li>
    )
}
