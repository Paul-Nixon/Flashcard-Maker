import styles from './Homepage.module.css';

import { Link } from 'react-router-dom';

import HomepageHeader from "../layout/HomepageHeader";

export default function Homepage() {
    return (
        <div className={styles.homepage}>
            <HomepageHeader />

            <div className={styles.homepageMainContent}>
                <div className={styles.cta}>
                    <h1 className={styles.ctaTitle}>Create Your Own Flashcards</h1>
                    <p className={styles.ctaSubtitle}>
                        This is a placeholder subtitle
                    </p>
                    <Link to="/register">
                        <button className={styles.ctaBtn}>Get Started</button>
                    </Link>
                </div>

                <div className={styles.homepageImg}></div>
            </div>
        </div>
    )
}
