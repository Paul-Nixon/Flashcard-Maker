import styles from './UserDashboard.module.css';

import Sidebar from '../layout/Sidebar';
import UserHomepage from './UserHomepage';

export default function UserDashboard() {
    return (
        <div className={styles.userDashboard}>
            <Sidebar />

            <div className={styles.dashboardMainContent}>
                <UserHomepage />
            </div>
        </div>
    )
}
