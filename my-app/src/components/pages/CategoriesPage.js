import styles from './CategoriesPage.module.css';

import CategoryList from '../categories/CategoryList';


export default function CategoriesPage(props) {
    return (
        <div className={styles.categoriesPage}>
            <button className={styles.newCategoryBtn} onClick={props.renderNewCategoryPage}>Add New Category</button>
            
            <CategoryList categories={props.categories} renderFlashcardsPage={props.renderFlashcardsPage}
            renderNewFlashcardPage={props.renderNewFlashcardPage}
            renderAssessmentPage={props.renderAssessmentPage} />
        </div>
    )
}
