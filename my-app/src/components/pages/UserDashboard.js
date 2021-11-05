import styles from './UserDashboard.module.css';

import Sidebar from '../layout/Sidebar';
import UserHomepage from './UserHomepage';
import CategoriesPage from './CategoriesPage';

export default function UserDashboard() {
    return (
        <div className={styles.userDashboard}>
            <Sidebar />

            <div className={styles.dashboardMainContent}>
                <CategoriesPage />
            </div>
        </div>
    )
}
