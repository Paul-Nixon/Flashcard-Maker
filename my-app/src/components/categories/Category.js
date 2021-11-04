import styles from './Category.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Category({ category }) {
    return (
        <div className={styles.category}>
            <h2 className={styles.categoryTitle}>Title</h2>

            <div className={styles.categoryOptions}>
                <button className={styles.categoryOptionBtn}>Add New Flashcard</button>
                <button className={styles.categoryOptionBtn}>View Flashcards</button>
                <FontAwesomeIcon icon={faTrash} className={styles.categoryTrashBtn} />
            </div>
        </div>
    )
}
