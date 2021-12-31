import styles from './UserHomepage.module.css';

import Card from "../ui/Card";


export default function UserHomepage({numOfCategories, numOfFlashcards, recentAssessments}) {
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
                        <h2 className={styles.snapshotTitle}>Tests Passed</h2>
                        <span className={styles.snapshotNum}>0</span>
                    </div>
                </Card>
            </div>

            <div className={styles.quizzesAndTestsInfo}>
                <h2 className={styles.dataSectionTitle}>Recent Assessments</h2>

                <div className={styles.dataCardsWrapper}>
                    <Card>
                        <div className={styles.latestTests}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.testCategory}>Category</span>
                                <span className={styles.testDate}>January 1</span>
                                <span className={styles.testGrade}>100%</span>
                            </div>

                            <div className={styles.infoWrapper}>
                                <span className={styles.testCategory}>Category</span>
                                <span className={styles.testDate}>January 1</span>
                                <span className={styles.testGrade}>100%</span>
                            </div>

                            <div className={styles.infoWrapper}>
                                <span className={styles.testCategory}>Category</span>
                                <span className={styles.testDate}>January 1</span>
                                <span className={styles.testGrade}>100%</span>
                            </div>
                        </div>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}
