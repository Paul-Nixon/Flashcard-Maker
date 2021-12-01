import styles from './FlashcardsPage.module.css';

import { useContext } from 'react';

import FlashcardList from "../flashcards/FlashcardList";
import CategoriesContext from '../../contexts/CategoriesContext';


export default function FlashcardsPage({ categoryID }) {
    
    const categoriesCtx = useContext(CategoriesContext),
    flashcards = categoriesCtx.fetchFlashcards(categoryID);

    
    return (
        <div className={styles.flashcardPage}>
            <FlashcardList flashcards={flashcards} />
        </div>
    )
}
