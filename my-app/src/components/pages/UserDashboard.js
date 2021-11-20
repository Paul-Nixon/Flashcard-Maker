import styles from './UserDashboard.module.css';

import { useState } from 'react';

import Sidebar from '../layout/Sidebar';
import UserHomepage from './UserHomepage';
import CategoriesPage from './CategoriesPage';
import NewCategory from '../categories/NewCategory';
import NewFlashcard from '../flashcards/NewFlashcard';
import { AuthProvider } from '../../contexts/AuthContext';
import { CategoriesProvider } from '../../contexts/CategoriesContext';
import FlashcardsPage from './FlashcardsPage';


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

    function renderNewFlashcardPage()
    {
        setPage("newFlashcard");
    }

    function renderFlashcardsPage()
    {
        setPage("flashcards");
    }


    return (
        <div className={styles.userDashboard}>
            <AuthProvider>
                <Sidebar renderUserHomepage={renderUserHomepage} renderCategoriesPage={renderCategoriesPage} />
            </AuthProvider>

            <div className={styles.dashboardMainContent}>
                {page === "homepage" && <UserHomepage />}
                {page === "categories" && <AuthProvider><CategoriesProvider>
                    <CategoriesPage renderNewCategoryPage={renderNewCategoryPage} 
                    renderNewFlashcardPage={renderNewFlashcardPage}
                    renderFlashcardsPage={renderFlashcardsPage} /></CategoriesProvider></AuthProvider>}
                {page === "newCategory" && <AuthProvider>
                    <CategoriesProvider><NewCategory /></CategoriesProvider></AuthProvider>}
                {page === "newFlashcard" && <AuthProvider>
                    <CategoriesProvider><NewFlashcard /></CategoriesProvider></AuthProvider>}
                {page === "flashcards" && <CategoriesProvider><FlashcardsPage /></CategoriesProvider>}
            </div>
        </div>
    )
}
