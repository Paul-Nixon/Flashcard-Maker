import styles from './UserDashboard.module.css';

import Sidebar from '../layout/Sidebar';


export default function UserDashboard() {
    return (
        <div className={styles.userDashboard}>
            <Sidebar />

            <div className={styles.dashboardMainContent}>
                Data will be displayed here
            </div>
        </div>
    )
}
