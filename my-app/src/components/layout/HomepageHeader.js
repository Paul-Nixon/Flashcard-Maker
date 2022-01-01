import styles from './HomepageHeader.module.css';

import { Link } from 'react-router-dom';

export default function HomepageHeader() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.logo}>Flashcard Maker</div>
            </Link>

            <div className={styles.internalLinks}>
                <div className={styles.accountLinks}>
                    <Link to="/login">
                        <button data-login className={styles.headerBtn}>Login</button>
                    </Link>
                    <Link to="/register">
                        <button data-register  className={styles.headerBtn}>Register</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
