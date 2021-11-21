import styles from './FlashcardsPage.module.css';

import { useContext } from 'react';

import FlashcardList from "../flashcards/FlashcardList";
import CategoriesContext from '../../contexts/CategoriesContext';


export default function FlashcardsPage({ categoryName }) {
    
    const categoriesCtx = useContext(CategoriesContext),
    flashcards = categoriesCtx.fetchFlashcards(categoryName);

    
    return (
        <div className={styles.flashcardPage}>
            <FlashcardList flashcards={flashcards} />
        </div>
    )
}
