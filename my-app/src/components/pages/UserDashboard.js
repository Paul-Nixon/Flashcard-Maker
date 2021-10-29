import styles from './UserDashboard.module.css';

import Topbar from '../layout/Topbar';
import Sidebar from '../layout/Sidebar';


export default function UserDashboard() {
    return (
        <div className={styles.userDashboard}>
            <Topbar />

            <div className={styles.dashboardMainContent}>
                <Sidebar />
                
            </div>
        </div>
    )
}
