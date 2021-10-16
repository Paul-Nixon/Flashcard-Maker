import styles from './HomepageHeader.module.css';

import { Link } from 'react-router-dom';

export default function HomepageHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Flashcard Maker</div>

            <div>
                <button>Login</button>
                <button>Register</button>
            </div>
        </header>
    )
}
