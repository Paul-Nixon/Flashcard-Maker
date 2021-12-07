import styles from "./FlashcardList.module.css";

import Flashcard from './Flashcard';
import Card from "../ui/Card";


export default function FlashcardList({ flashcards }) {
    return (
        <div className={styles.flashcardGrid}>
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
