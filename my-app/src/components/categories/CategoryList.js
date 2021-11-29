import styles from './CategoryList.module.css';

import { useState } from 'react';

import Category from './Category';
import { CategoriesProvider } from '../../contexts/CategoriesContext';


export default function CategoryList({ categories, renderNewFlashcardPage, renderFlashcardsPage }) {
    
    const [userCategories, setUserCategories] = useState(categories);
    
    function refreshList(newList)
    {
        setUserCategories(newList);
    }


    return (
        <ul className={styles.categoriesList}>
            {userCategories.map(category => {
                return <CategoriesProvider><Category name={category["data"].name} id={category["id"]}
                key={category["id"]} renderFlashcardsPage={renderFlashcardsPage}
                renderNewFlashcardPage={renderNewFlashcardPage} refreshList={refreshList} /></CategoriesProvider>
            })}
        </ul>
    )
}
