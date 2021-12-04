import styles from './FlashcardsPage.module.css';

import Carousel from '../layout/Carousel';


export default function FlashcardsPage({ flashcards }) {
    
    return (
        <div className={styles.flashcardPage}>
            <Carousel flashcards={flashcards} />
        </div>
    )
}
