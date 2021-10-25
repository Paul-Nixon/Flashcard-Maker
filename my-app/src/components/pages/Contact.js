import styles from './Contact.module.css';

import ContactForm from "../forms/ContactForm";
import HomepageHeader from '../layout/HomepageHeader';
import { AuthProvider } from '../../contexts/AuthContext';

export default function Contact() {
    return (
        <div className={styles.contactPage}>
            <HomepageHeader />

            <div className={styles.contactContent}>
                <h2 className="page-title">Contact</h2>
                <AuthProvider><ContactForm /></AuthProvider>
            </div>
        </div>
    )
}
