import styles from './Login.module.css';

import LoginForm from "../forms/LoginForm";
import HomepageHeader from '../layout/HomepageHeader';
import { AuthProvider } from '../../contexts/AuthContext';


export default function Login() {
    return (
        <div className={styles.loginPage}>
            <HomepageHeader />

            <div className={styles.loginContent}>
                <h2 className="page-title">Login</h2>
                <AuthProvider><LoginForm /></AuthProvider>
            </div>
        </div>
    )
}
