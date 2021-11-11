import styles from './UserDashboard.module.css';

import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";

import Sidebar from '../layout/Sidebar';
import UserHomepage from './UserHomepage';
import CategoriesPage from './CategoriesPage';
import NewCategory from '../categories/NewCategory';
import AuthContext from '../../contexts/AuthContext';


export default function UserDashboard() {
    
    const [page, setPage] = useState("homepage"),
    { logoutUser } = useContext(AuthContext),
    history = useHistory();
    
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

    function logoutHandler()
    {
        try
        {
            logoutUser();
            history.push("/login");
        }
        catch (error)
        {
            history.push("/register");
        }
    }

    return (
        <div className={styles.userDashboard}>
            <Sidebar renderUserHomepage={renderUserHomepage} renderCategoriesPage={renderCategoriesPage}
                logoutUser={logoutHandler} />

            <div className={styles.dashboardMainContent}>
                {page === "homepage" && <UserHomepage />}
                {page === "categories" && <CategoriesPage renderNewCategoryPage={renderNewCategoryPage} />}
                {page === "newCategory" && <NewCategory />}
            </div>
        </div>
    )
}
