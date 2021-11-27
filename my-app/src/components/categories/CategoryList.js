import styles from './CategoryList.module.css';

import Category from './Category';
import { AuthProvider } from '../../contexts/AuthContext';
import { CategoriesProvider } from '../../contexts/CategoriesContext';


export default function CategoryList({ categories, renderNewFlashcardPage ,renderFlashcardsPage }) {
    

    return (
        <ul className={styles.categoriesList}>
            {categories.map(category => {
                return <AuthProvider>
                    <CategoriesProvider><Category name={category["data"].name} key={category["id"]}
                    renderFlashcardsPage={renderFlashcardsPage}
                    renderNewFlashcardPage={renderNewFlashcardPage} /></CategoriesProvider>
                </AuthProvider>
            })}
        </ul>
    )
}
