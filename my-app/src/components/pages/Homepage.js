import styles from './Homepage.module.css';

import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div className={styles.homepage}>
            <div className={styles.homepageMainContent}>
                <div className={styles.cta}>
                    <h1 className={styles.ctaTitle}></h1>
                    <p className={styles.ctaSubtitle}></p>
                    <Link to="/register">
                        <button className={styles.ctaBtn}>Get Started</button>
                    </Link>
                </div>

                <div className={styles.homepageImg}></div>
            </div>
        </div>
    )
}
