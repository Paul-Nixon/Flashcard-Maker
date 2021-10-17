import styles from './About.module.css';

import HomepageHeader from "../layout/HomepageHeader";

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <HomepageHeader />

            <div className={styles.aboutContent}>
                <h2>About</h2>

                <section>
                    <div className={styles.aboutMainContent}>
                        <h2></h2>
                        <p></p>
                    </div>
                </section>
            </div>
        </div>
    )
}
