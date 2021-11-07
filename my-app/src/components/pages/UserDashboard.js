import styles from './UserDashboard.module.css';

import { useState } from 'react';

import Sidebar from '../layout/Sidebar';
import UserHomepage from './UserHomepage';
import CategoriesPage from './CategoriesPage';
import NewCategory from '../categories/NewCategory';
import CategoriesContext from '../../contexts/CategoriesContext';


export default function UserDashboard() {
    
    const [page, setPage] = useState("homepage");
    
    function renderUserHomepage()
    {
        setPage("homepage");
    }

    function renderCategoriesPage()
    {
        setPage("categories");
    }

    function renderNewCategoryPage()
    {
        setPage("newCategory");
    }


    return (
        <div className={styles.userDashboard}>
            <Sidebar renderUserHomepage={renderUserHomepage} renderCategoriesPage={renderCategoriesPage} />

            <div className={styles.dashboardMainContent}>
                {page === "homepage" && <UserHomepage />}
                {page === "categories" && <CategoriesPage renderNewCategoryPage={renderNewCategoryPage} />}
                {page === "newCategory" && <NewCategory />}
            </div>
        </div>
    )
}
