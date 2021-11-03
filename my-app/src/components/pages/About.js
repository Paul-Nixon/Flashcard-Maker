import styles from './About.module.css';

import HomepageHeader from "../layout/HomepageHeader";


export default function About() {
    return (
        <div className={styles.aboutPage}>
            <HomepageHeader />

            <div className={styles.aboutContent}>
                <h2 className="page-title">About</h2>

                <section>
                    <div className={styles.aboutMainContent}>
                        <div className={styles.aboutDetails}>
                            <h2 className={styles.aboutSectionTitle}>Make your own flashcards</h2>
                            <p className={styles.aboutSectionText}>
                                Need an easy and customizable way to study and retain information? When you login to
                                your account, you can make an unlimited number of flashcards for free. 
                            </p>
                            <ul className={styles.aboutSectionList}>
                                <li>Create categories which contain their own set of flashcards</li>
                                <li>Edit &amp; delete existing flashcards</li>
                            </ul>
                        </div>
                        
                        <img className={styles.aboutImg} src="" alt="" />
                    </div>

                    <div className={styles.aboutMainContent}>
                        <div className={styles.aboutDetails}>
                            <h2 className={styles.aboutSectionTitle}>Quiz &amp; test yourself</h2>
                            <p className={styles.aboutSectionText}>
                                The quiz feature lets you conduct a quiz using a user-specified number of a category's
                                flashcards. Also, the test feature conducts a test using all of a category's
                                flashcards.
                            </p>
                            <ul className={styles.aboutSectionList}>
                                <li>Can use an optional timer for quizzes and tests</li>
                                <li>Score for every test and quiz can be viewed using the Scores tab</li>
                            </ul>
                        </div>

                        <img className={styles.aboutImg} src="" alt="" />
                    </div>
                </section>
            </div>
        </div>
    )
}
