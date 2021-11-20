import styles from './FlashcardsPage.module.css';

import { useContext } from 'react';

import FlashcardList from "../flashcards/FlashcardList";
import CategoriesContext from '../../contexts/CategoriesContext';


export default function FlashcardsPage() {
    
    const categoriesCtx = useContext(CategoriesContext);

    
    return (
        <div className={styles.flashcardPage}>
            <FlashcardList />
        </div>
    )
}
