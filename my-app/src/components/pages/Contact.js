import styles from './Contact.module.css';

import ContactForm from "../forms/ContactForm";
import HomepageHeader from '../layout/HomepageHeader';

export default function Contact() {
    return (
        <div className={styles.contactPage}>
            <HomepageHeader />
            <ContactForm />
        </div>
    )
}
