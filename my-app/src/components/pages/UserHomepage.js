import styles from './UserHomepage.module.css';

import Card from "../ui/Card";


export default function UserHomepage() {
    return (
        <div className={styles.userHomepage}>
            <div className={styles.snapshotData}>
                <Card>
                    <h2></h2>
                    <span></span>
                </Card>
            </div>
        </div>
    )
}
