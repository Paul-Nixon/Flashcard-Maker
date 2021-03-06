import styles from "./FlashcardList.module.css";

import Flashcard from './Flashcard';


export default function FlashcardList({ flashcards }) {
    return (
        <div className={styles.flashcardGrid}>
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
