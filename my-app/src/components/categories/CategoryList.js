import styles from './CategoryList.module.css';

import Category from './Category';
import { CategoriesProvider } from '../../contexts/CategoriesContext';


export default function CategoryList({ categories, renderNewFlashcardPage, renderFlashcardsPage, renderAssessmentPage }) {


    return (
        <ul className={styles.categoriesList}>
            {categories.map(category => {
                return <CategoriesProvider><Category name={category["data"].name} id={category["id"]}
                key={category["id"]} renderFlashcardsPage={renderFlashcardsPage}
                renderNewFlashcardPage={renderNewFlashcardPage}
                renderAssessmentPage={renderAssessmentPage} /></CategoriesProvider>
            })}
        </ul>
    )
}
