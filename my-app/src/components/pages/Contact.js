import styles from './Contact.module.css';

import ContactForm from "../forms/ContactForm";
import HomepageHeader from '../layout/HomepageHeader';

export default function Contact() {
    return (
        <div className={styles.contactPage}>
            <HomepageHeader />

            <div className={styles.contactContent}>
                <h2 className="page-title">Contact</h2>
                <ContactForm />
            </div>
        </div>
    )
}
