import styles from './UserDashboard.module.css';

import { useState, useContext } from 'react';

import Sidebar from '../layout/Sidebar';
import UserHomepage from './UserHomepage';
import CategoriesPage from './CategoriesPage';
import NewCategory from '../categories/NewCategory';
import NewFlashcard from '../flashcards/NewFlashcard';
import { AuthProvider } from '../../contexts/AuthContext';
import { CategoriesProvider } from '../../contexts/CategoriesContext';
import AuthContext from "../../contexts/AuthContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import FlashcardsPage from './FlashcardsPage';
import useEffectOnce from "../custom_hooks/useEffectOnce";
import AssessmentPage from './AssessmentPage';


export default function UserDashboard() {
    
    const [page, setPage] = useState("homepage"),
    [categoryID, setCategoryID] = useState(""),
    [flashcards, setFlashcards] = useState([]),
    { currentUser } = useContext(AuthContext),
    categoriesCtx = useContext(CategoriesContext);

    useEffectOnce(() => categoriesCtx.fetchAllCategories(currentUser.email));
    
    
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

    function renderNewFlashcardPage(categoryID)
    {
        setCategoryID(categoryID);
        setPage("newFlashcard");
    }

    function renderFlashcardsPage(categoryID)
    {
        setFlashcards(categoriesCtx.fetchFlashcards(categoryID));
        setPage("flashcards");
    }

    function renderAssessmentPage(categoryID)
    {
        setFlashcards(categoriesCtx.fetchFlashcards(categoryID));
        setPage("assessment");
    }


    return (
        <div className={styles.userDashboard}>
            <AuthProvider>
                <Sidebar renderUserHomepage={renderUserHomepage} renderCategoriesPage={renderCategoriesPage} />
            </AuthProvider>

            <div className={styles.dashboardMainContent}>
                {page === "homepage" && <UserHomepage />}
                {page === "categories" && <CategoriesPage renderNewCategoryPage={renderNewCategoryPage} 
                    renderNewFlashcardPage={renderNewFlashcardPage}
                    renderFlashcardsPage={renderFlashcardsPage}
                    renderAssessmentPage={renderAssessmentPage} categories={categoriesCtx.userCategories} />}
                {page === "newCategory" && <AuthProvider>
                    <CategoriesProvider><NewCategory /></CategoriesProvider></AuthProvider>}
                {page === "newFlashcard" && <AuthProvider>
                    <CategoriesProvider>
                        <NewFlashcard categoryID={categoryID} />
                    </CategoriesProvider></AuthProvider>}
                {page === "flashcards" && <FlashcardsPage flashcards={flashcards} />}
                {page === "assessment" && <AssessmentPage flashcards={flashcards} user={currentUser.email}
                returntoCategories={renderCategoriesPage} />}
            </div>
        </div>
    )
}
