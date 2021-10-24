import styles from './Register.module.css';

import RegisterForm from "../forms/RegisterForm";
import HomepageHeader from '../layout/HomepageHeader';

export default function Register() {
    return (
        <div className={styles.registerPage}>
            <HomepageHeader />

            <div className={styles.registerContent}>
                <h2 className="page-title">Register</h2>
                <RegisterForm />
            </div>
        </div>
    )
}
