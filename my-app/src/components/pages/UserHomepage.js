import styles from './UserHomepage.module.css';

import Card from "../ui/Card";


export default function UserHomepage({numOfCategories, numOfFlashcards, testsPassed}) {
    return (
        <div className={styles.userHomepage}>
            <div className={styles.snapshotData}>
                <Card>
                    <div className={styles.snapshotDetails}>
                        <h2 className={styles.snapshotTitle}>Categories</h2>
                        <span className={styles.snapshotNum}>{numOfCategories}</span>
                    </div>
                </Card>

                <Card>
                    <div className={styles.snapshotDetails}>
                        <h2 className={styles.snapshotTitle}>Flashcards</h2>
                        <span className={styles.snapshotNum}>{numOfFlashcards}</span>
                    </div>
                </Card>

                <Card>
                    <div className={styles.snapshotDetails}>
                        <h2 className={styles.snapshotTitle}>Tests Taken</h2>
                        <span className={styles.snapshotNum}>{testsPassed ? testsPassed : 0}</span>
                    </div>
                </Card>
            </div>
        </div>
    )
}
