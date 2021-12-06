import styles from './FlashcardsPage.module.css';

import FlashcardList from "../flashcards/FlashcardList";


export default function FlashcardsPage({ flashcards }) {
    
    return (
        <div className={styles.flashcardPage}>
            <FlashcardList flashcards={flashcards} />
        </div>
    )
}
