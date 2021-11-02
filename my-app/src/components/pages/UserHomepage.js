import styles from './UserHomepage.module.css';

import Card from "../ui/Card";


export default function UserHomepage() {
    return (
        <div className={styles.userHomepage}>
            <div className={styles.snapshotData}>
                <Card>
                    <div className={styles.snapshotDetails}>
                        <h2 className={styles.snapshotTitle}>Categories</h2>
                        <span className={styles.snapshotNum}>0</span>
                    </div>
                </Card>

                <Card>
                    <div className={styles.snapshotDetails}>
                        <h2 className={styles.snapshotTitle}>Flashcards</h2>
                        <span className={styles.snapshotNum}>0</span>
                    </div>
                </Card>

                <Card>
                    <div className={styles.snapshotDetails}>
                        <h2 className={styles.snapshotTitle}>Quizzes Passed</h2>
                        <span className={styles.snapshotNum}>0</span>
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
                <h2 className={styles.dataSectionTitle}>Recent Quizzes &amp; Tests</h2>

                <div className={styles.dataCardsWrapper}>
                    <Card>
                        <h3 className={styles.dataSectionSubtitle}>Quizzes</h3>

                        <div className={styles.latestQuizzes}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.quizCategory}>Category</span>
                                <span className={styles.quizDate}>January 1</span>
                                <span className={styles.quizGrade}>100%</span>
                            </div>

                            <div className={styles.infoWrapper}>
                                <span className={styles.quizCategory}>Category</span>
                                <span className={styles.quizDate}>January 1</span>
                                <span className={styles.quizGrade}>100%</span>
                            </div>

                            <div className={styles.infoWrapper}>
                                <span className={styles.quizCategory}>Category</span>
                                <span className={styles.quizDate}>January 1</span>
                                <span className={styles.quizGrade}>100%</span>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className={styles.dataSectionSubtitle}>Tests</h3>

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
